// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Account } from "./components/auth/Account"
import AuthPage from './components/auth/AuthPage';
import UserInfo from './components/profile/UserInfo';
// import SpotifyWebPlayer from 'react-spotify-web-playback/lib';
// import ArtistProfileForm from './components/artist/ArtistProfileForm';

import Store from './components/store/Store';

import Header from './components/universal/Header'
import Footer from './components/universal/Footer'

import Home from './components/home/Home'
import Artist from './components/artist/Artist'

function App() {
  return (
    <div className="App flex flex-col h-screen justify-between ease-in duration-300">
      <Header />
      <header className="App-header bg-white dark:bg-darkgray ease-in duration-300">
        {/* <Account>
          <AuthPage />
          <UserInfo />
        </Account> */}
      <Store />
      </header>
      <Artist />
      <Footer />
    </div>
  );
}

export default App;
