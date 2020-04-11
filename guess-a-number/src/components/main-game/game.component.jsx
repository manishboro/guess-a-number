import React, { Component } from "react";

import { GameUI, ClueBox, BackButton } from "./gameUI.component";
import "./game.styles.scss";

export default class Game extends Component {
  constructor() {
    super();

    this.state = {
      tempInputValue: "",
      inputValue: [],
      randomNumber: [],
      stage: [],
      clueBoxColor: "",
    };
  }

  maxRange = 0;
  currentStage = 1;

  componentDidMount() {
    this.setStage();
  }

  setStage = () => {
    const randomNumberArray = this.state.randomNumber;
    randomNumberArray.push(
      Math.floor(Math.random() * Math.floor(100 + this.maxRange))
    );

    const stageArray = this.state.stage;
    stageArray.push(this.currentStage);

    const inputValueArray = this.state.inputValue;
    inputValueArray.push(this.state.tempInputValue);

    return this.setState(
      {
        randomNumber: randomNumberArray,
        stage: stageArray,
        inputValue: inputValueArray,
      },
      () => {
        console.log("Answer : ", this.state.randomNumber);
      }
    );
  };

  resetInput = (color) => {
    this.setState({ tempInputValue: "", clueBoxColor: color });
  };

  getDifference = () => {
    const a = this.state.randomNumber.length - 1;
    const diff = Math.abs(
      this.state.tempInputValue - this.state.randomNumber[a]
    );

    if (diff >= 16) {
      return this.resetInput("blue");
    }

    if (diff >= 5 && diff <= 15) {
      return this.resetInput("yellow");
    }

    if (diff >= 1 && diff <= 4) {
      return this.resetInput("red");
    }

    if (diff === 0) {
      this.maxRange = this.maxRange + 100;
      this.currentStage = this.currentStage + 1;
      this.resetInput("green");
      return this.setStage();
    }
  };

  handleChange = (e) => {
    this.setState({ tempInputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getDifference();
  };

  render() {
    const { stage } = this.state; //Destructuring

    return (
      <div className="game-container">
        <BackButton />

        <div className="game-container-mainbox">
          <ClueBox color={this.state.clueBoxColor} />

          <div className="game-container-main">
            {stage.map((el, index) => (
              <GameUI
                key={el}
                stage={el}
                value={
                  index === stage.length - 1
                    ? this.state.tempInputValue
                    : this.state.inputValue[index + 1]
                }
                max={this.maxRange + 100}
                disable={index === stage.length - 1 ? false : true}
                handleChange={(e) => this.handleChange(e)}
                handleSubmit={(e) => this.handleSubmit(e)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
