import { createContext } from "react";
import { Socket } from "socket.io-client";

export const LoggedContext = createContext(false);

export const SocketContext = createContext<Socket | null>(null);
