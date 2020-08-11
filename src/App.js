import React, { Component } from 'react';
import "./styles/App.scss";


import Hero from "./components/Hero.jsx"
import Workout from "./components/Workout.jsx"
// import Countdown from "./components/Countdown.jsx"
import Tips from "./components/Tips.jsx";
import Ambience from "./components/Ambience.jsx";
import Stopwatch from "./components/Stopwatch.jsx";
import Flame from "./components/Flame.jsx"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Workout />
        {/* <Countdown /> */}
        <Ambience />
        <Stopwatch />
        <Flame />
        <Tips />
      </div >
    )
  }
}

export default App;
