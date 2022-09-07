export type Message = {
  id: string;
  userId: string;
  message: string;
  date: string;
};

export type RoomProps = {
  setRoomName: (roomUserName: string | undefined) => void,
  isLogged: boolean
};

export type HeaderPropsType = {
  isLogged: boolean,
  roomName: string | undefined
};

export type IconPropsType = {
  name: string;
  className?: string,
  onClick?: () => void
};
