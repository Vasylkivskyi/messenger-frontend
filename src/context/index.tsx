import { createContext } from "react";
// eslint-disable-next-line import/no-named-as-default
import io, { Socket } from "socket.io-client";

const API_URL = process.env.REACT_APP_API_URL;

export const socket = io(`${API_URL}`, {
  transports: ["websocket", "polling"],
  reconnection: true,
  reconnectionDelay: 5000,
  reconnectionAttempts: 10,
});

export const LoggedContext = createContext(false);

export const SocketContext = createContext<Socket>(socket);
