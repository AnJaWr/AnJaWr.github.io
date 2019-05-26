import React, { Component } from "react";
import "./App.css";
import SetValuePanel from "./SetValuePanel";

// jak dodać koponent:
import Heading from "./Heading";
import Counter from "./Counter";
// zaimportuj klasę z ... ścieżka

class App extends Component {
  // tworzymy klasę App dziedziczaca po klasie  Component

  render() {
    // metdoda render
    return (
      // zwraca jeden element -> div!
      <div className="App">
        <Heading headingText="Moja superaplikacja licząca" />
        <Counter initValue={33} />
        <Heading headingText="Nowy licznik" />
        <Counter initValue={133} />

        
      </div>
    );
  }
}

export default App;
