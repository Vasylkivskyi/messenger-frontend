import React from "react";
import cc from "classcat";
import { Message, Messages } from "../../types";
import "./messagesList.scss";

const MessageItem: React.FC<{
  message: Message;
  currentUserId: string | null;
}> = ({ message, currentUserId }) => (
  <li
    className={cc({
      "message-container": true,
      "owner-message": message.userId === currentUserId,
    })}
  >
    <div className="message">
      {`${currentUserId}`}
      <div className="text">{message.text}</div>
      <div className="date-container">
        <span className="date">{message.date}</span>
      </div>
    </div>
  </li>
);

const MessagesList: React.FC<{ messages: Messages }> = ({ messages }) => {
  const currentUserId = localStorage.getItem("user_id");

  return (
    <ul className="messages-list">
      {messages.map((m) => (
        <MessageItem message={m} key={m.id} currentUserId={currentUserId} />
      ))}
    </ul>
  );
};

export default MessagesList;
