import { Dispatch } from "react";
import { ROOM_ACTION_TYPES } from "../reducers";

export type Message = {
  _id: string;
  senderId: string;
  roomId: string;
  text: string;
  createdAt: string;
};

export type RoomProps = {
  rooms: Array<RoomType>;
};

export type HeaderPropsType = {
  userName: string | undefined;
  rooms: Array<RoomType>;
  dispatch: Dispatch<RoomActionType>;
};

export type IconPropsType = {
  name: string;
  className?: string;
  onClick?: (arg0?: unknown) => void;
};

export interface ILogin {
  email: string;
  password: string;
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
  SEND_MESSAGE = "send_message",
  RECEIVE_MESSAGE = "receive_message",
  GET_MESSAGES = "get_messages",
  MESSAGES_RECEIVED = "messages_received",
}

export enum SocketUserEvents {
  ADD_USER = "add_user",
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

export type localStorageValueType = {
  [key: string]: string | number | boolean;
} | null;

export type useLocalStorageReturnType = [
  value: localStorageValueType,
  setValue: (data: unknown) => void
];

export type ErrorType = {
  response?: {
    data?: {
      message: string;
    };
  };
};
