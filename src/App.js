// import logo from './logo.svg';
import './App.css';

import React from 'react';
// import ForgotPassword from './components/auth/ForgotPassword'
import { Account } from "./components/auth/Account"
import Status from './components/auth/Status';
import AuthPage from './components/auth/AuthPage';
// import Settings from './components/auth/Settings';
// import SpotifyWebPlayer from 'react-spotify-web-playback/lib';
// import EventForm from './components/event/EventForm';
// import MerchForm from './components/store/MerchForm';
// import ArtistProfileForm from './components/artist/ArtistProfileForm';

import Header from './components/universal/Header'
import Footer from './components/universal/Footer'

function App() {
  return (
    <div className="App flex flex-col h-screen justify-between">
      <Header />
      <header className="App-header bg-white">
        {/* <EventForm />
        <MerchForm /> */}
        {/* <ArtistProfileForm /> */}
        <Account>
          <Status /><br></br>
          <AuthPage />
          {/* <ForgotPassword />
          <Settings /> */}
        </Account>
      </header>
      <Footer />
      {/* <SpotifyWebPlayer token="BQD7WWRcU7NB3u9D0YmaCLCjLIck_32XS1lYBOyXFAt5Cypyp-yYATPoQpCp2JRN9UooG5pqVO08Lj3sd0eCyISmNb9FEIorLpWeqJ04UlJ9jRxjRtdsIxLSnAOmiHv45-noQ97ezuqSXALOc91ofqy5dwPA9gSTL6ji-A5Xorx6Y14eOl9WVgHXkuUW3HeGmW2qsD9uK3dRHN3aOA"></SpotifyWebPlayer> */}
    </div>
  );
}

export default App;
