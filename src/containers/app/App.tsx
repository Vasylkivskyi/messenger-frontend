import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from '../Login/Login';
import './App.scss';
import Navigation from '../../components/Navigation/Navigation';
import EmptyRoom from '../../components/EmptyRoom/EmptyRoom';
import Room from '../../components/Room/Room';
import NotFound from '../../components/NotFound/NotFound';
import Header from '../../components/Header/Header';
import { LoggedContext } from '../../context';

const rooms = [
  { id: '1', username: 'Pavlo', message: 'Рада проголосувала за надання полякам в Україні особливих прав та гарантій.' },
  { id: '2', username: 'Petro', message: 'Президент Литви виступив у ВР та вручив Володимиру Зеленському орден Вітовта Великого.' },
  { id: '3', username: 'LesleyWicky', message: 'Зеленський підписав указ про призначення Андрія Костіна Генпрокурором.' },
  { id: '4', username: 'Alionka', message: 'Горячая нарезка работы ВСУ по позициям оккупантов 💪' },
  { id: '5', username: 'Artem', message: 'БПЛА для врага – худший подарок.' },
  { id: '6', username: 'Sasha', message: 'Мы уже даже не помним, какой был последний счет 😄' },
  {
    id: '7', username: 'Very long user name just for the test', message: 'Видео, которое должен увидеть весь мир: военные рф пытают украинского военного и отрезают ему гениталии. Тварь, которая это сделала, уже идентифицирована. Максимальный репост. О зверствах орков должны знать все. Кадры казни не публикуем из понятных причин. Видео без ',
  },
  { id: '8', username: 'Sasha', message: 'Мы уже даже 😄' },
  { id: '9', username: 'Sasha', message: 'Мы уже даже не помним, какой был последний счет 😄' },
  { id: '10', username: 'Sasha', message: 'Мы уже даже не помним, какой был последний счет 😄' },
  { id: '11', username: 'Sasha', message: 'Мы уже даже не помним, какой был последний счет 😄' },
  { id: '12', username: 'Sasha', message: 'Мы уже даже не помним, какой был последний счет 😄' },
  { id: '13', username: 'Sasha', message: 'Мы уже даже не помним, какой был последний счет 😄' },
  { id: '14', username: 'Sasha', message: 'Мы уже даже не помним, какой был последний счет 😄' },
  { id: '15', username: 'Sasha', message: 'Мы уже даже не помним, какой был последний счет 😄' },
  { id: '16', username: 'Sasha', message: 'Мы уже даже не помним, какой был последний счет 😄' },
  { id: '17', username: 'Sasha', message: 'Мы уже даже не помним, какой был последний счет 😄' },
  { id: '18', username: 'Sasha', message: 'Мы уже даже не помним, какой был последний счет 😄' },
  { id: '19', username: 'Sasha', message: 'Мы уже даже не помним, какой был последний счет 😄' },
];

const App = () => {
  const location = useLocation();
  const [roomName, setRoomName] = useState<string | undefined>('');
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLogged(!!token);
  }, [location]);

  return (
    <LoggedContext.Provider value={isLogged}>
      <div className="App">
        <Header roomName={roomName} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login showRegister />} />
          <Route path="/" element={<Navigation rooms={rooms} />}>
            <Route index element={<EmptyRoom />} />
            <Route path=":roomUserName" element={<Room setRoomName={setRoomName} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </LoggedContext.Provider>
  );
};

export default App;
