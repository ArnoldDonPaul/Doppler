import React, { Component } from 'react';
import "./styles/App.scss";

import Hero from "./components/Hero"
import Tips from "./components/Tips";
// import WPM from "./components/WPM";
import Ambience from "./components/Ambience";
import Stopwatch from "./components/Stopwatch";
import Flame from "./components/Flame"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        {/* <WPM /> */}
        <Ambience />
        <Stopwatch />
        <Flame />
        <Tips />
      </div >
    )
  }
}

export default App;
