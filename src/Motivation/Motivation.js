import React, { Component } from "react";
import "./Motivation.css";

export class Motivation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Push me :)"
    };
    this.pushMe = this.pushMe.bind(this);
  }

  pushMe() {
    let quotes = [
      "Believe you can and you’re halfway there.",
      "You have to expect things of yourself before you can do them.",
      "It always seems impossible until it’s done.",
      "Don’t let what you cannot do interfere with what you can do.",
      "Start where you are. Use what you have. Do what you can.",
      "Strive for progress, not perfection.",
      "Success is the sum of small efforts, repeated day in and day out.",
      "The secret to getting ahead is getting started.",
      "You don’t have to be great to start, but you have to start to be great.",
      "The expert in everything was once a beginner.",
      "There are no shortcuts to any place worth going.",
      "Push yourself, because no one else is going to do it for you.",
      "Some people dream of accomplishing great things. Others stay awake and make it happen.",
      "There is no substitute for hard work.",
      "Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
      "Life has two rules: 1) Never quit. 2) Always remember Rule #1.",
      "I’ve failed over and over and over again in my life. And that is why I succeed.",
      "I don’t measure a man’s success by how high he climbs, but how high he bounces when he hits the bottom.",
      "If you’re going through hell, keep going.",
      "Don’t let your victories go to your head, or your failures go to your heart.",
      "You don’t drown by falling in the water; you drown by staying there.",
      "The pain you feel today is the strength you will feel tomorrow. For every challenge encountered there is opportunity for growth.",
      "It’s not going to be easy, but it’s going to be worth it."
    ];

    let random = Math.floor(Math.random() * quotes.length);

    this.setState({ quote: quotes[random] });
  }

  render() {
    return (
      <div>
        <button className="Button1" onClick={this.pushMe}>
          {this.state.quote}
        </button>
      </div>
    );
  }
}
