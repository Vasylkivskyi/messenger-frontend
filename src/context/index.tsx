import { createContext } from "react";
import { Socket } from "socket.io-client";
import { localStorageValueType } from "../types";

export const LoggedContext = createContext(false);

export const UserContext = createContext<localStorageValueType>(null);

export const SocketContext = createContext<Socket | null>(null);
