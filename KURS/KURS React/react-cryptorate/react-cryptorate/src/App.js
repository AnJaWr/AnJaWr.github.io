import React from 'react';
import './App.css';
import Crypto from './Crypto'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import {bitcoin} from '@fortawesome/free-solid-svg-icons';




function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        Crypto Rate
      </header>
      <Crypto />
    </div>
  );
}

export default App;
