import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserLoggedIn } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserLoggedIn.Provider value={false}>
      <App />
    </UserLoggedIn.Provider>
  </React.StrictMode>
);
