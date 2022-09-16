import { RoomType } from "../../types";
import Navigation from "../Navigation/Navigation";
import "./chat.scss";

type ChatProps = {
  rooms: Array<RoomType>;
};

export const Chat: React.FC<ChatProps> = ({ rooms }) => {
  return (
    <div className="chat">
      <Navigation rooms={rooms} />
    </div>
  );
};
