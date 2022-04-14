// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Account } from "./components/auth/Account"
import AuthPage from './components/auth/AuthPage';
import UserInfo from './components/profile/UserInfo';
// import SpotifyWebPlayer from 'react-spotify-web-playback/lib';
// import ArtistProfileForm from './components/artist/ArtistProfileForm';

import StorePage from './components/store/StorePage';

import Header from './components/universal/Header'
import Footer from './components/universal/Footer'

import Home from './components/home/Home'
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App flex flex-col h-screen justify-between">
      <Header />
      <header className="App-header bg-white">
        {/* <Account>
          <AuthPage />
          <UserInfo />
        </Account> */}
        <StorePage />
      </header>
      
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
