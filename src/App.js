// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Signup, VerifyEmail } from './components/auth/Signup';
// import VerifyEmail from './components/auth/VerifyEmail';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword'
import { Account } from "./components/auth/Account"
import Status from './components/auth/Status';
import Settings from './components/auth/Settings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Account>
          <label>Sign up</label>
          <Signup />
          <label>Verify Email</label>
          <VerifyEmail />
          <label>Login</label>
          <Login />
          <ForgotPassword />
          <label>Status</label>
          <Status />
          <label>Settings</label>
          <Settings />
        </Account>
      </header>
    </div>
  );
}

export default App;
