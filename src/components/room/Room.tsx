import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import MessagesList from "../Messages/MessagesList";
import { Message, MessagesEvents, RoomProps } from "../../types";
import Icon from "../Icon/Icon";
import { LoggedContext, SocketContext, UserContext } from "../../context";
import { getMessagesList } from "../../requests";
import "./room.scss";

const Room: React.FC<RoomProps> = ({ rooms }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const location = useLocation();
  const isLogged = useContext(LoggedContext);
  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  const userData = useContext(UserContext);
  const [messages, setMessages] = useState<Array<Message>>([]);

  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (!isLogged) navigate("/login");
  }, [isLogged, navigate]);

  const currentRoom = useMemo(() => {
    return rooms.find((room) => {
      return room.members.find((user) => `/${user.name}` === location.pathname);
    });
  }, [rooms, location]);

  useEffect(() => {
    socket?.on(
      MessagesEvents.RECEIVE_MESSAGE,
      ({ message }: { message: Message }) => {
        setMessages((prev) => [...prev, message]);
      }
    );
  }, [socket]);

  const sendMessage = useCallback(() => {
    if (!text) return;
    const message = {
      senderId: userData?._id,
      roomId: currentRoom?._id,
      text,
    };
    socket?.emit(MessagesEvents.SEND_MESSAGE, message);
    setText("");
    textareaRef.current?.focus();
  }, [currentRoom, socket, text, userData]);

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

  useEffect(() => {
    (async () => {
      if (currentRoom) {
        const messages = await getMessagesList(currentRoom._id);
        setMessages(messages);
      }
    })();
  }, [currentRoom]);

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
