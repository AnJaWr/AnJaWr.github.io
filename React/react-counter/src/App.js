import React, { Component } from "react";
import "./App.css";
// import SetStepValue from "./SetStepValue";

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
        {/* tu ustawiliśmy że wartoś tego propsu to ten string */}
        <Counter initValue={12} stepValue={5} />




      </div>
    );
  }
}

export default App;
