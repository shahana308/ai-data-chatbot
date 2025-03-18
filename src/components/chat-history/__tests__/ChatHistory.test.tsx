import { render } from "utils/test-utils";
import ChatHistory from "../ChatHistory";

describe("ChatHistory", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<ChatHistory />);
    expect(container).toMatchSnapshot();
  });
});
