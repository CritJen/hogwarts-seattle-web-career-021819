import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogPen from "./HogPen.js";
import HogDeets from "./HogDeets.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeHog: null
    };
    this.setActiveHog = this.setActiveHog.bind(this);
  }

  setActiveHog(hog) {
    this.setState({ activeHog: hog });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HogPen hogs={hogs} setActiveHog={this.setActiveHog} />
        {this.state.activeHog && <HogDeets hog={this.state.activeHog} />}
      </div>
    );
  }
}

export default App;
