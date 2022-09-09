import { createContext } from "react";
import { Socket } from "socket.io-client";

// eslint-disable-next-line import/prefer-default-export
export const LoggedContext = createContext(false);

export const SocketContext = createContext<Socket | null>(null);
