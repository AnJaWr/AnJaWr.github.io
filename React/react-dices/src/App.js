import React from 'react';
import './App.css';
import Dices from "./dices"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Alea iacta est</h1>
      </header>
        <Dices />
       
      <footer className="App-footer"> Napisano w ReactJS </footer>
    </div>
  );
}

export default App;
