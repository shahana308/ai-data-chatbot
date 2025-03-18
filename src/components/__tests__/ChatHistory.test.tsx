import React from "react";
import { render } from "utils/test-utils";
import ChatHistory from "../chat-history/ChatHistory";

describe("ChatHistory", () => {
  it("renders correctly and matches snapshot", () => {
    const { baseElement } = render(<ChatHistory />);
    expect(baseElement).toMatchSnapshot();
  });
});
