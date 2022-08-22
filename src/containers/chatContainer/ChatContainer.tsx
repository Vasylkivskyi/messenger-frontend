import React from 'react';
import Avatar from '../../components/avatar/Avatar';
import MessagesList from '../../components/messages/MessagesList';
import RoomsList from '../../components/rooms/RoomsList';
import './chatContainer.scss';
import { ReactComponent as SendIcon } from '../../images/send.svg';

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
  { id: '8', username: 'Sasha', message: 'Мы уже даже не помним, какой был последний счет 😄' },
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

const messages = [
  {
    id: '1',
    userId: '1',
    message: 'І гарячу кружку',
    date: 'Fri Jul 29 2022 09:49',
  },
  {
    id: '2',
    userId: '1',
    message: 'Ок',
    date: 'Fri Jul 29 2022 09:49',
  },
  {
    id: '3',
    userId: '2',
    message: 'І купи собі води',
    date: 'Fri Jul 29 2022 09:49',
  },
  {
    id: '4',
    userId: '2',
    message: 'А Саші коли до стоматолога?',
    date: 'Fri Jul 29 2022 09:49',
  },
  {
    id: '5',
    userId: '1',
    message: 'В пятницю',
    date: 'Fri Jul 29 2022 09:49',
  },
  {
    id: '6',
    userId: '2',
    message: 'Ok',
    date: 'Fri Jul 29 2022 09:49',
  },
  {
    id: '7',
    userId: '2',
    message: 'А на котру?',
    date: 'Fri Jul 29 2022 09:49',
  },
  {
    id: '8',
    userId: '1',
    message: 'На 2 вроді',
    date: 'Fri Jul 29 2022 09:49',
  },
  {
    id: '9',
    userId: '1',
    message: 'Тобі смс прийде',
    date: 'Fri Jul 29 2022 09:49',
  },
  {
    id: '4',
    userId: '2',
    message: 'Ok',
    date: 'Fri Jul 29 2022 09:49',
  },
  {
    id: '5',
    userId: '2',
    message: 'Дякую',
    date: 'Fri Jul 29 2022 09:49',
  },
  {
    id: '6',
    userId: '2',
    message: 'Погодуй малого...',
    date: 'Fri Jul 29 2022 09:49',
  },
  {
    id: '7',
    userId: '2',
    message: 'Звари йому пельмені, будь ласка',
    date: 'Fri Jul 29 2022 09:49',
  },
  {
    id: '8',
    userId: '1',
    message: 'Бля та він не хоче',
    date: 'Fri Jul 29 2022 09:49',
  },
  {
    id: '9',
    userId: '1',
    message: 'Він 2 куска піци втовк',
    date: 'Fri Jul 29 2022 09:49',
  },
];

const MessagesContainer = () => (
  <div className="chat-container">
    <div className="chat-head">
      <div className="search-container">
        <input type="text" placeholder="Search" />
      </div>
      <Avatar title="S" />
      <div className="user-name">Sasha</div>
    </div>
    <div className="left">
      <RoomsList rooms={rooms} />
    </div>
    <div className="right">
      <div className="messages-list-container">
        <MessagesList messages={messages} />
      </div>
      <div className="input-container">
        <div className="textarea-wrapper">
          <span className="textarea" role="textbox" contentEditable />
        </div>
        <div className="send-btn"><SendIcon /></div>
      </div>
    </div>
  </div>
);

export default MessagesContainer;
