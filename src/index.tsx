import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './containers/app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
// eslint-disable-next-line no-console
console.log('test1');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
