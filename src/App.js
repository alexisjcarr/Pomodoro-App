import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';
import { Pomodoro } from "./Pomodoro/Pomodoro.js";

class App extends Component {
  render() {
    return (
      <div className="root">
        <Pomodoro />
      </div>
    );
  }
}

export default App;
