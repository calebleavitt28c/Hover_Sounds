import logo from './logo.svg';
// import './App.css';

import React from 'react';
import './App.css';
import Signup from './components/signup';

// const App = () => {
//   return (
//     <div>
//       <Signup />
//     </div>
//   )
// }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Signup />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
