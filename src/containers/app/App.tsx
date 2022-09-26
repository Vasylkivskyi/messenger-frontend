import { useEffect, useReducer, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { connect, Socket } from "socket.io-client";
import Login from "../Login/Login";
import Navigation from "../../components/Navigation/Navigation";
import EmptyRoom from "../../components/EmptyRoom/EmptyRoom";
import Room from "../../components/Room/Room";
import NotFound from "../../components/NotFound/NotFound";
import Header from "../../components/Header/Header";
import { SocketContext, LoggedContext, UserContext } from "../../context";
import { getRoomsList } from "../../requests";
import { roomReducer, ROOM_ACTION_TYPES } from "../../reducers";
import {
  RoomEvents,
  SocketUserEvents,
  localStorageValueType,
} from "../../types";
import "./App.scss";
import { LocalStorageService } from "../../lib/localStorageService";

const API_URL = process.env.REACT_APP_API_URL;

export const App = () => {
  const [userData, setUserData] = useState<localStorageValueType>(null);
  const location = useLocation();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [rooms, dispatch] = useReducer(roomReducer, []);
  const [userName, setUserName] = useState<string | undefined>("");

  useEffect(() => {
    setUserData(LocalStorageService.getItem("userData"));
  }, [location]);

  useEffect(() => {
    const token = userData?.token;
    if (token) {
      setUserName(userData?.name as string);
      const socket = connect(`${API_URL}`, {
        transportOptions: {
          polling: {
            extraHeaders: {
              Authorization: `Bearer ${token}`,
            },
          },
        },
      });
      setSocket(socket);
      socket.on("connect", () => {
        if (userData._id) {
          socket.emit(SocketUserEvents.ADD_USER, userData._id);
        }
      });
      (async () => {
        const result = await getRoomsList(userData);
        dispatch({ type: ROOM_ACTION_TYPES.SET_ROOMS, payload: result });
      })();
    } else {
      setUserName("");
    }
  }, [userData]);

  useEffect(() => {
    (() => {
      socket?.on(RoomEvents.ROOM_CREATED, ({ room }) => {
        dispatch({ type: ROOM_ACTION_TYPES.ADD_ROOM, payload: [room] });
      });
    })();
  }, [socket, location]);

  return (
    <LoggedContext.Provider value={!!userData?.token}>
      <UserContext.Provider value={userData}>
        <SocketContext.Provider value={socket}>
          <div className="App">
            <Header userName={userName} rooms={rooms} dispatch={dispatch} />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Login showRegister />} />
              <Route path="/" element={<Navigation rooms={rooms} />}>
                <Route index element={<EmptyRoom />} />
                <Route path=":roomUserName" element={<Room rooms={rooms} />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SocketContext.Provider>
      </UserContext.Provider>
    </LoggedContext.Provider>
  );
};
