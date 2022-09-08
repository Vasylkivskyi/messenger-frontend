import { NavigateFunction } from 'react-router-dom';

export type Message = {
  id: string;
  userId: string;
  text: string;
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

export interface ILogin {
  username: string;
  password: string;
  navigate: NavigateFunction;
  setError: (message: string) => void
}

export interface IRegister extends ILogin {
  hint: string;
}

export type UserType = {
  _id: string;
  username: string;
  createdAt: string;
  updatedAt: string;
};

export type RoomType = {
  _id: string;
  users: Array<UserType>
  messages: Array<Message>
  createdAt: string;
  updatedAt: string;
};

export type RoomsListType = Array<RoomType>;

export type SearchResultsType = {
  searchResults: Array<UserType>;
  clear: () => void
};
