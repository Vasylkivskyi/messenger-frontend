import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { ROOM_ACTION_TYPES } from "../reducers";

export type Message = {
  id: string;
  userId: string;
  text: string;
  date: string;
};

export type Messages = Array<Message>;

export type RoomProps = {
  setRoomName: (roomUserName: string | undefined) => void;
  rooms: RoomsListType;
};

export type HeaderPropsType = {
  roomName: string | undefined;
  rooms: RoomsListType;
  dispatch: Dispatch<RoomActionType>;
};

export type IconPropsType = {
  name: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (arg0: any) => void;
};

export interface ILogin {
  username: string;
  password: string;
  navigate: NavigateFunction;
  setError: (message: string) => void;
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
  users: Array<UserType>;
  messages: Array<Message>;
  createdAt: string;
  updatedAt: string;
};

export type RoomsListType = Array<RoomType>;

export type SearchResultsType = {
  searchResults: Array<UserType>;
  clear: (willFocus: boolean) => void;
  rooms: RoomsListType;
  dispatch: Dispatch<RoomActionType>;
};

export type RoomActionType = {
  type: ROOM_ACTION_TYPES;
  payload: RoomsListType;
};

export enum MessagesEvents {
  CREATE_MESSAGE = "create_message",
}

export enum RoomEvents {
  JOIN_ROOM = "join_room",
  ROOM_CREATED = "room_created",
}

export type NavElementType = {
  room: RoomType;
};

export type NavigationType = {
  rooms: RoomsListType;
};
