import './App.css';

import React from 'react';
import { Account } from "./components/auth/Account"


import HoverSounds from './components/HoverSounds';

function App() {
  return (
    <Account>
      <HoverSounds />
    </Account>
  );
}

export default App;
