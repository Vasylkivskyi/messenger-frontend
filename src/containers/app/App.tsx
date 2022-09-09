import { useEffect, useReducer, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// eslint-disable-next-line import/no-named-as-default
import io, { Socket } from "socket.io-client";
import Login from "../Login/Login";
import Navigation from "../../components/Navigation/Navigation";
import EmptyRoom from "../../components/EmptyRoom/EmptyRoom";
import Room from "../../components/Room/Room";
import NotFound from "../../components/NotFound/NotFound";
import Header from "../../components/Header/Header";
import { LoggedContext, SocketContext } from "../../context";
import { getRoomsList } from "../../requests";
import "./App.scss";
import { roomReducer, ROOM_ACTION_TYPES } from "../../reducers";

const API_URL = process.env.REACT_APP_API_URL;

const App = () => {
  const location = useLocation();
  const [rooms, dispatch] = useReducer(roomReducer, []);
  const [roomName, setRoomName] = useState<string | undefined>("");
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isLogged, setLogged] = useState<boolean>(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    const socketInstance = io(`${API_URL}`);
    setSocket(socketInstance);
  }, []);

  useEffect(() => {
    setLogged(!!localStorage.getItem("token"));
  }, [location]);

  useEffect(() => {
    if (isLogged) {
      (async () => {
        const result = await getRoomsList();
        dispatch({ type: ROOM_ACTION_TYPES.SET_ROOMS, payload: result });
      })();
    }
  }, [isLogged]);

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
                element={<Room setRoomName={setRoomName} />}
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
