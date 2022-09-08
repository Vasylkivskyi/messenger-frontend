export type Message = {
  id: string;
  userId: string;
  message: string;
  date: string;
};

export type RoomProps = {
  setRoomName: (roomUserName: string | undefined) => void,
};

export type HeaderPropsType = {
  roomName: string | undefined
};

export type IconPropsType = {
  name: string;
  className?: string,
  onClick?: () => void
};
