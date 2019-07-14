import React, { Component } from "react";
import { kebabCase } from "lodash";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  onClick = () => {
    alert(kebabCase("AAAAAAAA this button does nothing!"));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.onClick}>CLICK ME</button>
        </header>
      </div>
    );
  }
}

export default App;
