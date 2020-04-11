import React, { Component } from "react";
import { Rules } from "../rules/rules.component";
import "./navigation.styles.scss";
import { Button } from "react-bootstrap";

export default class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: false,
    };
  }

  toggleVisibility = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible })); //Changing 'state' whenever the button is clicked
  };

  render() {
    const { isVisible } = this.state; //Destructuring

    return (
      <div className="navigation">
        <div className="navigation-header">
          <Button
            variant="warning"
            className="button btn-rules"
            onClick={this.toggleVisibility}
          >
            {this.props.name}
          </Button>
        </div>
        <div className={`navigation-popup ${isVisible ? "" : "hidden"}`}>
          <div className="navigation-content">
            <Rules />
          </div>
        </div>
      </div>
    );
  }
}
