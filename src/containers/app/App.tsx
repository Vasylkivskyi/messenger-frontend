import React, { useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Login from '../Login/Login';
import './App.scss';
import Navigation from '../../components/Navigation/Navigation';
import EmptyRoom from '../../components/EmptyRoom/EmptyRoom';
import Room from '../../components/Room/Room';
import Icon from '../../components/Icon/Icon';

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

// eslint-disable-next-line arrow-body-style
const App = () => {
  const [roomUserName, setRoomUserName] = useState<string | undefined>('');
  const params = useParams();
  const isLoggedIn = true;
  // eslint-disable-next-line no-console
  console.log(params);

  return (
    <div className="App">
      {/* {!isLoggedIn ? <Login /> : <ChatContainer />} */}
      {isLoggedIn && (
      <div className="head">
        <div className="left">
          <Icon name="mark_email_unread" className="header-logo-wrapper" />
          <span className="logo-text">MessengerApp</span>
          <div className="search-container">
            <input type="text" placeholder="Search" />
            <Icon name="search" className="header-search-wrapper" />
          </div>
        </div>
        <div className="right">
          <Icon name="3p" className="header-icon" />
          <div className="user-name">{roomUserName}</div>
        </div>
      </div>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigation rooms={rooms} />}>
          <Route index element={<EmptyRoom />} />
          <Route path=":roomUserName" element={<Room setRoomUserName={setRoomUserName} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
