import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { ROOM_ACTION_TYPES } from "../reducers";

export type Message = {
  _id: string;
  senderId: string;
  roomId: string;
  text: string;
  createdAt: string;
};

export type RoomProps = {
  setRoomName: (roomUserName: string | undefined) => void;
  rooms: Array<RoomType>;
};

export type HeaderPropsType = {
  roomName: string | undefined;
  rooms: Array<RoomType>;
  dispatch: Dispatch<RoomActionType>;
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
  members: Array<UserType>;
  createdAt: string;
  updatedAt: string;
};

export type SearchResultsType = {
  searchResults: Array<UserType>;
  clear: (willFocus: boolean) => void;
  rooms: Array<RoomType>;
  dispatch: Dispatch<RoomActionType>;
  hideSearchResults: () => void;
};

export type RoomActionType = {
  type: ROOM_ACTION_TYPES;
  payload: Array<RoomType>;
};

export enum MessagesEvents {
  CREATE_MESSAGE = "create_message",
  MESSAGE_CREATED = "message_created",
  GET_MESSAGES = "get_messages",
  MESSAGES_SENDED = "messages_sended",
}

export enum RoomEvents {
  JOIN_ROOM = "join_room",
  ROOM_CREATED = "room_created",
}

export type NavElementType = {
  room: RoomType;
};

export type NavigationType = {
  rooms: Array<RoomType>;
};
