import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render as libRender, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App, ConfigProvider } from "antd";
import { ReactElement } from "react";

// eslint-disable-next-line @typescript-eslint/no-require-imports
jest.mock("next/router", () => require("next-router-mock"));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
export const queryClient = new QueryClient();

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) =>
  libRender(
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={{ hashed: false }}>
        <App>{ui}</App>
      </ConfigProvider>
    </QueryClientProvider>,
    { ...options }
  );

// If we need to include providers use this instead
// render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
import "@testing-library/jest-dom";
export { userEvent };

export { customRender as render };
