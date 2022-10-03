import { screen, render } from "@testing-library/react";
import { UserContext } from "../../context";
import MessagesList from "./MessagesList";

const messages = [
  {
    createdAt: "2022-09-24T07:50:41.058Z",
    roomId: "632eb69c83936e59ad0b87ec",
    senderId: "1",
    text: "hello",
    updatedAt: "2022-09-24T07:50:41.058Z",
    _id: "1",
  },
  {
    createdAt: "2022-09-24T07:52:41.058Z",
    roomId: "632eb69c83936e59ad0b87ec",
    senderId: "2",
    text: "hi",
    updatedAt: "2022-09-24T07:52:41.058Z",
    _id: "2",
  },
];

const currentUser = {
  _id: "2",
  name: "Pavlo",
  email: "pavlo@gmail.com",
  createdAt: "2022-09-24T07:47:29.070Z",
  updatedAt: "2022-09-24T07:47:29.070Z",
};

describe("Messages list", () => {
  window.HTMLElement.prototype.scrollIntoView = () => null;

  it("Messages list renders", () => {
    render(<MessagesList messages={messages} />);

    expect(screen.getByText("hello")).toBeInTheDocument();
  });

  it("Dynamic message class works", () => {
    render(
      <UserContext.Provider value={currentUser}>
        <MessagesList messages={messages} />;
      </UserContext.Provider>
    );
    expect(document.querySelectorAll(".message-container")[1]).toHaveClass(
      "owner-message"
    );
  });
});
