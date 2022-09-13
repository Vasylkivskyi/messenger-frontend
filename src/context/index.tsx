import { createContext } from "react";
import { Socket, connect } from "socket.io-client";

const API_URL = process.env.REACT_APP_API_URL;

export const socket = connect(`${API_URL}`);

export const LoggedContext = createContext(false);

export const SocketContext = createContext<Socket>(socket);
