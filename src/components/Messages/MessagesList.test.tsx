import { screen, render } from "@testing-library/react";
import MessagesList from "./MessagesList";

const messages = [
  {
    createdAt: "2022-09-24T07:50:41.058Z",
    roomId: "632eb69c83936e59ad0b87ec",
    senderId: "632eb611f70e0f7823c55e65",
    text: "hello",
    updatedAt: "2022-09-24T07:50:41.058Z",
    _id: "1",
  },
];

describe("Messages list", () => {
  it("Messages list renders", () => {
    window.HTMLElement.prototype.scrollIntoView = () => null;
    render(<MessagesList messages={messages} />);

    expect(screen.getByText("hello")).toBeInTheDocument();
  });
});
