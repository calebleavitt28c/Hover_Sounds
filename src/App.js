// import logo from './logo.svg';
import './App.css';

import React from 'react';
import Signup from './components/auth/Signup';
// import VerifyEmail from './components/auth/VerifyEmail';
import Login from './components/auth/Login';
// import ForgotPassword from './components/auth/ForgotPassword'
import { Account } from "./components/auth/Account"
import Status from './components/auth/Status';
// import Settings from './components/auth/Settings';
<<<<<<< Updated upstream
import SpotifyWebPlayer from 'react-spotify-web-playback/lib';
=======
<<<<<<< HEAD
import EventForm from './components/event/EventForm';
import MerchForm from './components/store/MerchForm';
=======
import SpotifyWebPlayer from 'react-spotify-web-playback/lib';
>>>>>>> 4727714cfaea3d03144670551ed48bc2dac816fd
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
      <header className="App-header">
        {/* <EventForm /> */}
        <MerchForm />
        {/* <Account>
=======
>>>>>>> Stashed changes
      <header className="App-header bg-primary">
        <Account>
>>>>>>> 4727714cfaea3d03144670551ed48bc2dac816fd
          <Status />
          <Signup />
          <Login />
          <ForgotPassword />
          <label>Settings</label>
          <Settings />
        </Account> */}
      </header>
      <SpotifyWebPlayer token="BQD7WWRcU7NB3u9D0YmaCLCjLIck_32XS1lYBOyXFAt5Cypyp-yYATPoQpCp2JRN9UooG5pqVO08Lj3sd0eCyISmNb9FEIorLpWeqJ04UlJ9jRxjRtdsIxLSnAOmiHv45-noQ97ezuqSXALOc91ofqy5dwPA9gSTL6ji-A5Xorx6Y14eOl9WVgHXkuUW3HeGmW2qsD9uK3dRHN3aOA"></SpotifyWebPlayer>
    </div>
  );
}

export default App;
