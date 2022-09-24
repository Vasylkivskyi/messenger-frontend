import React, { useContext, useEffect, useRef } from "react";
import cc from "classcat";
import { Message } from "../../types";
import { formatDate } from "../../lib/helpers";
import "./messagesList.scss";
import { UserContext } from "../../context";

const MessageItem: React.FC<{
  message: Message;
  currentUserId: string | null;
}> = ({ message, currentUserId }) => (
  <div
    className={cc({
      "message-container": true,
      "owner-message": message.senderId === currentUserId,
    })}
  >
    <div className="message">
      <div className="text">{message.text}</div>
      <div className="date-container">
        <span className="date">{formatDate(message.createdAt)}</span>
      </div>
    </div>
  </div>
);

const MessagesList: React.FC<{ messages: Array<Message> }> = ({ messages }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const userData = useContext(UserContext);

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className="messages-list">
      {messages.map((m) => (
        <div ref={scrollRef} key={m._id}>
          <MessageItem message={m} currentUserId={userData?._id as string} />
        </div>
      ))}
    </div>
  );
};

export default MessagesList;
