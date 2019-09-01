//src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>
        <Travel 
          destination=" new york"
          country=" USA"
          photo="https://pix10.agoda.net/geo/city/318/1_318_02.jpg?s=1920x822"
          distance="6000 km"
        />
        <Travel
          destination=" mexico"
          country=" mexique"
          photo="https://img.ev.mu/images/villes/4464/1605x642/4464.jpg"
          distance="8000 km"
        />
      </div>
    );
  }
}

export default App;
