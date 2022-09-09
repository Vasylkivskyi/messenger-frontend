import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import MessagesList from "../Messages/MessagesList";
import "./room.scss";
import { RoomProps } from "../../types";
import Icon from "../Icon/Icon";
import { LoggedContext, SocketContext } from "../../context";

const messages = [
  {
    id: "1",
    userId: "1",
    message: "І гарячу кружку",
    date: "Fri Jul 29 2022 09:49",
  },
  {
    id: "2",
    userId: "1",
    message: "Ок",
    date: "Fri Jul 29 2022 09:49",
  },
  {
    id: "3",
    userId: "2",
    message: "І купи собі води",
    date: "Fri Jul 29 2022 09:49",
  },
  {
    id: "4",
    userId: "2",
    message: "А Саші коли до стоматолога?",
    date: "Fri Jul 29 2022 09:49",
  },
  {
    id: "5",
    userId: "1",
    message: "В пятницю",
    date: "Fri Jul 29 2022 09:49",
  },
  {
    id: "6",
    userId: "2",
    message: "Ok",
    date: "Fri Jul 29 2022 09:49",
  },
  {
    id: "7",
    userId: "2",
    message: "А на котру?",
    date: "Fri Jul 29 2022 09:49",
  },
  {
    id: "8",
    userId: "1",
    message: "На 2 вроді",
    date: "Fri Jul 29 2022 09:49",
  },
  {
    id: "9",
    userId: "1",
    message: "Тобі смс прийде",
    date: "Fri Jul 29 2022 09:49",
  },
  {
    id: "10",
    userId: "2",
    message: "Ok",
    date: "Fri Jul 29 2022 09:49",
  },
  {
    id: "11",
    userId: "2",
    message: "Дякую",
    date: "Fri Jul 29 2022 09:49",
  },
  {
    id: "12",
    userId: "2",
    message: "Погодуй малого...",
    date: "Fri Jul 29 2022 09:49",
  },
  {
    id: "13",
    userId: "2",
    message: "Звари йому пельмені, будь ласка",
    date: "Fri Jul 29 2022 09:49",
  },
  {
    id: "14",
    userId: "1",
    message: "Бля та він не хоче",
    date: "Fri Jul 29 2022 09:49",
  },
  {
    id: "15",
    userId: "1",
    message: "Він 2 куска піци втовк",
    date: "Fri Jul 29 2022 09:49",
  },
];

const Room: React.FC<RoomProps> = ({ setRoomName }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const isLogged = useContext(LoggedContext);
  const [text, setText] = useState<string>("");
  const currentUserId = localStorage.getItem("user_id");
  const { roomUserName } = useParams();
  const navigate = useNavigate();
  const socket = useContext(SocketContext);
  useEffect(() => {
    setRoomName(roomUserName);
  }, [setRoomName, roomUserName]);

  useEffect(() => {
    if (!isLogged) navigate("/login");
  }, [isLogged, navigate]);

  const sendMessage = useCallback(() => {
    return null;
  }, [text]);

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
        <textarea
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
