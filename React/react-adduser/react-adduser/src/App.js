import React from "react";
import './App.css';
import Users from "./Users"
// import UserList from "./UserList.js"

function App() {
    // metdoda render
    return (
      // zwraca jeden element -> div!
      <div className="App">
        <header>
          <h1> User's List </h1>
        </header>
        {/* tu ustawiliśmy że wartoś tego propsu to ten string */}
        <Users />




      </div>
    );
  }


export default App;