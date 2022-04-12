// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Account } from "./components/auth/Account"
import AuthPage from './components/auth/AuthPage';
import UserInfo from './components/profile/UserInfo';
// import Settings from './components/auth/Settings';
// import SpotifyWebPlayer from 'react-spotify-web-playback/lib';
// import EventForm from './components/event/EventForm';
// import MerchForm from './components/store/MerchForm';
// import ArtistProfileForm from './components/artist/ArtistProfileForm';

import Header from './components/universal/Header'
import Footer from './components/universal/Footer'

import Home from './components/home/Home'
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App flex flex-col h-screen justify-between">
      <Header />
      {/* <header className="App-header bg-white">
        <Account>
          <AuthPage />
          <UserInfo />
        </Account>
      </header> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
