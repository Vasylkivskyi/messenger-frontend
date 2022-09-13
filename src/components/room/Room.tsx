import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useNavigate, useParams } from "react-router-dom";
import MessagesList from "../Messages/MessagesList";
import "./room.scss";
import { Messages, RoomProps } from "../../types";
import Icon from "../Icon/Icon";
import { LoggedContext } from "../../context";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Room: React.FC<RoomProps> = ({ setRoomName, rooms }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const isLogged = useContext(LoggedContext);
  // const socket = useContext(SocketContext);
  const navigate = useNavigate();

  const [messages, setMessages] = useState<Messages>([]);

  const [text, setText] = useState<string>("");

  const { roomUserName } = useParams();

  useEffect(() => {
    setRoomName(roomUserName);
  }, [setRoomName, roomUserName]);

  useEffect(() => {
    setMessages([]);
  }, []);

  useEffect(() => {
    if (!isLogged) navigate("/login");
  }, [isLogged, navigate]);

  const sendMessage = useCallback(() => {
    // socket?.emit(MessagesEvents.CREATE_MESSAGE, {
    //   user: currentUserId,
    //   room: currentRoom?._id,
    //   text,
    // });
    // setText("");
    textareaRef.current?.focus();
  }, []);

  const onKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLSpanElement>) => {
      if (event.key === "Enter" && event.shiftKey) {
        event.preventDefault();
        setText((prev) => prev + "\n");
      }
      if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
      }
    },
    [sendMessage]
  );

  return (
    <div className="room">
      <div className="messages-list-container">
        <MessagesList messages={messages} />
      </div>
      <div className="input-container">
        <TextareaAutosize
          ref={textareaRef}
          className="textarea"
          role="textbox"
          onChange={(event) => setText(event.target.value)}
          onKeyPress={(event) => onKeyPress(event)}
          value={text}
        />
        <Icon name="send" className="send-icon-wrapper" onClick={sendMessage} />
      </div>
    </div>
  );
};

export default Room;
