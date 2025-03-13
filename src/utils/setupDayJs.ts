import MockDate from "mockdate";

// Jest mock for dayjs with timezone plugin
jest.mock("dayjs", () => {
  const actualDayjs = jest.requireActual("dayjs");
  actualDayjs.extend(jest.requireActual("dayjs/plugin/utc"));
  actualDayjs.extend(jest.requireActual("dayjs/plugin/timezone"));
  actualDayjs.extend(jest.requireActual("dayjs/plugin/advancedFormat"));
  return actualDayjs;
});

// Mock the current date and time
beforeAll(() => {
  MockDate.set("2024-02-01");
});

// Reset the original date implementation
afterAll(() => {
  MockDate.reset();
});
