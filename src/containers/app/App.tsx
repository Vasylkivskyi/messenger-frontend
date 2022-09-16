import { useEffect, useReducer, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { connect, Socket } from "socket.io-client";
import Login from "../Login/Login";
import Navigation from "../../components/Navigation/Navigation";
import EmptyRoom from "../../components/EmptyRoom/EmptyRoom";
import Room from "../../components/Room/Room";
import NotFound from "../../components/NotFound/NotFound";
import Header from "../../components/Header/Header";
import { SocketContext, LoggedContext } from "../../context";
import { getRoomsList } from "../../requests";
import { roomReducer, ROOM_ACTION_TYPES } from "../../reducers";
import { RoomEvents, SocketUserEvents } from "../../types";
import "./App.scss";

const API_URL = process.env.REACT_APP_API_URL;

const App = () => {
  const location = useLocation();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [rooms, dispatch] = useReducer(roomReducer, []);
  const [roomName, setRoomName] = useState<string | undefined>("");
  const [isLogged, setLogged] = useState<boolean>(
    !!localStorage.getItem("token")
  );
  useEffect(() => {
    setLogged(!!localStorage.getItem("token"));
  }, [location]);

  useEffect(() => {
    if (isLogged) {
      (async () => {
        const socket = connect(`${API_URL}`);
        setSocket(socket);
        socket.emit(SocketUserEvents.ADD_USER, localStorage.getItem("user_id"));
        const result = await getRoomsList();
        dispatch({ type: ROOM_ACTION_TYPES.SET_ROOMS, payload: result });
      })();
    } else {
      setRoomName("");
    }
  }, [isLogged]);

  useEffect(() => {
    (() => {
      socket?.on(RoomEvents.ROOM_CREATED, ({ room }) => {
        dispatch({ type: ROOM_ACTION_TYPES.ADD_ROOM, payload: [room] });
      });
    })();
  }, [socket]);

  return (
    <LoggedContext.Provider value={!!isLogged}>
      <SocketContext.Provider value={socket}>
        <div className="App">
          <Header roomName={roomName} rooms={rooms} dispatch={dispatch} />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Login showRegister />} />
            <Route path="/" element={<Navigation rooms={rooms} />}>
              <Route index element={<EmptyRoom />} />
              <Route
                path=":roomUserName"
                element={<Room setRoomName={setRoomName} rooms={rooms} />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SocketContext.Provider>
    </LoggedContext.Provider>
  );
};

export default App;
