import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Particles from "react-particles-js";
import Navigation from "./components/navigation/navigation.component";
import Game from "./components/main-game/game.component";
import { homePage as HomePage } from "./components/home-page/home-page.component";
import "./App.scss";

const particleOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: false,
      },
    },
    size: {
      value: 10,
      random: true,
    },
    move: {
      direction: "bottom",
      out_mode: "out",
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "remove",
      },
    },
    modes: {
      remove: {
        particles_nb: 10,
      },
    },
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particle" params={particleOptions} />
        <Navigation name="Rules" />
        <section className="section-main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/play" component={Game} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
