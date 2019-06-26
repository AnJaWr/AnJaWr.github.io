import React, { Component } from "react";
import './App.css';
import Rolling from "./Rolling"


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Alea iacta est</h1>
        </header>
        <Rolling />
        <footer className="App-footer"> Napisano w ReactJS </footer>
      </div>
    );
  }
}
export default App;
