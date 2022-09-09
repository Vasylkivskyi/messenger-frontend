import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../Login/Login";
import "./App.scss";
import Navigation from "../../components/Navigation/Navigation";
import EmptyRoom from "../../components/EmptyRoom/EmptyRoom";
import Room from "../../components/Room/Room";
import NotFound from "../../components/NotFound/NotFound";
import Header from "../../components/Header/Header";
import { LoggedContext } from "../../context";
import { getRoomsList } from "../../requests";
import { RoomsListType } from "../../types";

const App = () => {
  const [rooms, setRooms] = useState<RoomsListType>([]);
  const [roomName, setRoomName] = useState<string | undefined>("");
  const [isLogged, setLogged] = useState<boolean>(
    !!localStorage.getItem("token")
  );
  const location = useLocation();

  useEffect(() => {
    setLogged(!!localStorage.getItem("token"));
  }, [location]);

  useEffect(() => {
    if (isLogged) {
      (async () => {
        const result = await getRoomsList();
        setRooms(result);
      })();
    }
  }, [isLogged]);

  return (
    <LoggedContext.Provider value={!!isLogged}>
      <div className="App">
        <Header roomName={roomName} />
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
    </LoggedContext.Provider>
  );
};

export default App;
