export type Message = {
  id: string;
  userId: string;
  message: string;
  date: string;
};

export type RoomProps = {
  setRoomUserName: (roomUserName: string | undefined) => void
};
