import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { ROOM_ACTION_TYPES } from "../reducers";

export type Message = {
  id: string;
  userId: string;
  roomId: string;
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
  isLogged: boolean;
  searchResults: Array<UserType>;
  setSearchResults: (users: Array<UserType>) => void;
};

export type IconPropsType = {
  name: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (arg0: any) => void;
};

export interface ILogin {
  email: string;
  password: string;
  navigate: NavigateFunction;
  setError: (message: string) => void;
}

export interface IRegister extends ILogin {
  name: string;
}

export type UserType = {
  _id: string;
  name: string;
  email: string;
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
  hideSearchResults: () => void;
};

export type RoomActionType = {
  type: ROOM_ACTION_TYPES;
  payload: RoomsListType;
};

export enum MessagesEvents {
  SEND_MESSAGE = "send_message",
  RECEIVE_MESSAGE = "receive_message",
  GET_MESSAGES = "get_messages",
  MESSAGES_RECEIVED = "messages_received",
}

export enum RoomEvents {
  JOIN_ROOMS = "join_rooms",
  CREATE_ROOM = "create_room",
  ROOM_CREATED = "room_created",
}

export type NavElementType = {
  room: RoomType;
};

export type NavigationType = {
  rooms: RoomsListType;
};
