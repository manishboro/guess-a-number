import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./game.styles.scss";

export const GameUI = (props) => {
  return (
    <div className="game">
      <h1 className="game-header">{`Stage ${props.stage}`}</h1>
      <Form onSubmit={props.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="number"
            placeholder="Enter a Number"
            required
            disabled={props.disable}
            className="input-number"
            value={props.value}
            onChange={props.handleChange}
            min="0"
            max={props.max}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={props.disable}>
          Guess
        </Button>
      </Form>
    </div>
  );
};

export const ClueBox = (props) => {
  return (
    <div className="game-container-cluebox">
      <div
        className={`game-container-cluebox-box box-1 ${
          props.color === "green" ? "zoom" : ""
        }`}
      >
        Correct
      </div>
      <div
        className={`game-container-cluebox-box box-2 ${
          props.color === "red" ? "zoom" : ""
        }`}
      >
        Hot
      </div>
      <div
        className={`game-container-cluebox-box box-3 ${
          props.color === "yellow" ? "zoom" : ""
        }`}
      >
        Warm
      </div>
      <div
        className={`game-container-cluebox-box box-4 ${
          props.color === "blue" ? "zoom" : ""
        }`}
      >
        {`Cold`}
      </div>
    </div>
  );
};

export const BackButton = () => {
  return (
    <div className="back-button">
      <Link to="/">
        <img
          className="back-button-image"
          src={require("../../img/left-arrow.png")}
          alt="back-button"
        ></img>
      </Link>
    </div>
  );
};
