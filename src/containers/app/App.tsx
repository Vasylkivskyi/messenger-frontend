import { useEffect, useReducer, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// eslint-disable-next-line import/no-named-as-default
import Login from "../Login/Login";
import Navigation from "../../components/Navigation/Navigation";
import EmptyRoom from "../../components/EmptyRoom/EmptyRoom";
import Room from "../../components/Room/Room";
import NotFound from "../../components/NotFound/NotFound";
import Header from "../../components/Header/Header";
import { SocketContext, LoggedContext, socket } from "../../context";
import { getRoomsList } from "../../requests";
import "./App.scss";
import { roomReducer, ROOM_ACTION_TYPES } from "../../reducers";
import { RoomEvents, RoomType, UserType } from "../../types";
import { Chat } from "../../components/Chat/Chat";

const App = () => {
  const location = useLocation();
  const [rooms, setRooms] = useState([]);
  const [searchResults, setSearchResults] = useState<Array<UserType>>([]);

  const [isLogged, setLogged] = useState<boolean>(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    setLogged(!!localStorage.getItem("token"));
  }, [location]);

  return (
    <div className="App">
      <Header
        roomName={"test"}
        isLogged={isLogged}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login showRegister />} />
        <Route path="/" element={<Chat rooms={rooms} />} />
        {/* <Route index element={<EmptyRoom />} />
          <Route
            path=":roomUserName"
            element={<Room setRoomName={setRoomName} rooms={rooms} />}
          />
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
