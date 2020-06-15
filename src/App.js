import React, { Component } from 'react';
import "./styles/App.scss";

import Nav from "./components/Nav"
import About from "./components/About";
// import WPM from "./components/WPM";
import Music from "./components/Music";
import Stopwatch from "./components/Stopwatch";
import Flame from "./components/Flame"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <About />
        {/* <WPM /> */}
        <Music />
        <Stopwatch />
        <Flame />
      </div >
    )
  }
}

export default App;
