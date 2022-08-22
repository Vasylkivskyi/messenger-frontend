import React from 'react';
import Login from '../login/Login';
import ChatContainer from '../chatContainer/ChatContainer';
import './App.scss';

const App = () => {
  const isLoggedIn = true;
  return (
    <div className="App">
      {!isLoggedIn ? <Login /> : <ChatContainer />}
    </div>
  );
};

export default App;
