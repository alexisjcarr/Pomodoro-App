import React, { Component } from "react";
//import { Cube } from "react-preloaders";
import { Pomodoro } from "./Pomodoro/Pomodoro.js";

class App extends Component {
  render() {
    return (
      <div>
        <Pomodoro />
      </div>
    );
  }
}

export default App;
