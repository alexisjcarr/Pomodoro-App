import React, { Component } from "react";
import format from "format-duration";
import "./Pomodoro.css";
import { Motivation } from "../Motivation/Motivation.js";

export class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
    this.startTime = this.startTime.bind(this);
    this.stopTime = this.stopTime.bind(this);
    this.startBreak = this.startBreak.bind(this);
  }

  startTime() {
    this.deadline = Date.now() + 1500000;
    this.timer = setInterval(() => {
      if (this.state.time < 0) {
        this.timer = clearInterval(this.timer, this.stopTime.bind(this), 0);
        //this.setState({ time: 0 });
      }
      this.setState({ time: this.deadline - Date.now() });
    }, 1);
  }

  stopTime() {
    //change name of function
    clearInterval(this.timer, this.startTime.bind(this), 0);
    this.setState({ time: 0 });
  }

  startBreak() {
    this.break_time = Date.now() + 300000;
    this.timer = setInterval(() => {
      if (this.state.time < 0) {
        this.timer = clearInterval(this.timer, this.stopTime.bind(this), 0);
        //this.setState({ time: 0 });
      }
      this.setState({ time: this.break_time - Date.now() });
    }, 1);
  }

  render() {
    return (
      <div className="Big" style={{ textAlign: "center" }}>
        <div id="time-c">
          <h1 id="time">{format(this.state.time)}</h1>
        </div>
        <button id="ham-button" className="Button" onClick={this.startTime}>
          GO HARD
        </button>
        <br />
        <br />
        <button id="pause-button" className="Button" onClick={this.stopTime}>
          reset
        </button>
        <br />
        <br />
        <button id="break button" className="Button" onClick={this.startBreak}>
          start break
        </button>
        <br />
        <br />
        <Motivation />
        <footer id="footer">
          © 2019. Created and coded with ❤ by Alexis Carr
        </footer>
      </div>
    );
  }
}
