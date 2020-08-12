import React, { Component } from 'react';
import Workout from "../components/Workout.jsx"
import Countdown from "../components/Countdown.jsx"

class Circuit extends Component {
    render() {
        return (
            <>
                <Workout />
                <Countdown />
            </>
        )
    }
}

export default Circuit;