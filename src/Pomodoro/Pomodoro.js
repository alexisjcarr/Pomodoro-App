import React, { Component } from "react";
import format from "format-duration";
import "./Pomodoro.css";

export class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      breakTime: null,
      start: Date.now(),
      isOn: true
    };
    this.startTime = this.startTime.bind(this);
    this.stopTime = this.stopTime.bind(this);
    this.startBreak = this.startBreak.bind(this);
  }

  startTime() {
    this.deadline = Date.now() + 1500000;
    this.timer = setInterval(() => {
      this.setState({ time: this.deadline - Date.now() });
      /* let x = 0;
            if(++x === 2510)
                window.clearInterval(this.timer); */
    }, 1);
  }

  stopTime() {
    clearInterval(this.timer);
  }

  startBreak() {
    this.break_time = Date.now() + 300000;
    this.timer = setInterval(() =>
      this.setState({ time: this.break_time - Date.now() })
    );
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div id="time-c">
          <h1 id="time">{format(this.state.time)}</h1>
        </div>
        <button id="ham-button" className="Button" onClick={this.startTime}>
          go HAM
        </button>
        <br />
        <br />
        <button id="pause-button" className="Button" onClick={this.stopTime}>
          pause
        </button>
        <br />
        <br />
        <button id="break button" className="Button" onClick={this.startBreak}>
          start break
        </button>
        <br />
        <br />
        <p id="footer">© 2019. Created and coded with ❤ by Alexis Carr</p>
      </div>
    );
  }
}
