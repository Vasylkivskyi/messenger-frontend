import React from "react";
import "./messagesList.scss";
import cc from "classcat";

type Message = {
  id: string;
  userId: string;
  message: string;
  date: string;
};

type Messages = Array<Message>;

const MessageItem: React.FC<{ message: Message }> = ({ message }) => (
  <li
    className={cc({
      "message-container": true,
      "owner-message": message.userId === "2",
    })}
  >
    <div className="message">
      <div className="text">{message.message}</div>
      <div className="date-container">
        <span className="date">{message.date}</span>
      </div>
    </div>
  </li>
);

const MessagesList: React.FC<{ messages: Messages }> = ({ messages }) => (
  <ul className="messages-list">
    {messages.map((m) => (
      <MessageItem message={m} key={m.id} />
    ))}
  </ul>
);

export default MessagesList;
