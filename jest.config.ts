import nextJest from "next/jest.js";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";
import type { JestConfigWithTsJest } from "ts-jest";

const customJestConfig: JestConfigWithTsJest = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  setupFiles: ["<rootDir>src/stores/mockStore.ts"],
  setupFilesAfterEnv: ["<rootDir>src/utils/setupDayJs.ts"],
  coverageDirectory: "coverage/jest-coverage",
  coverageReporters: ["text", "html", "json-summary", "json", "cobertura"],
  collectCoverageFrom: ["src/{components,utils,screens}/**/*.{tsx,ts}"],
  coveragePathIgnorePatterns: [".interface.ts", ".type.ts"],
  roots: ["<rootDir>"],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths /*, { prefix: '<rootDir>/' } */
  ),
};

const createJestConfig = nextJest({
  dir: "./src",
})({
  ...customJestConfig,
  transform: {
    "^.+\\.[tj]sx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
      },
    ],
  },
});

module.exports = async () => {
  const jestConfig = await createJestConfig();

  const transformIgnorePatterns = ["^.+\\.module\\.(css|sass|scss)$"];

  return { ...jestConfig, transformIgnorePatterns };
};
