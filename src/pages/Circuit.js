import React, { Component } from 'react';
import Logo from "../components/Logo.jsx"
import Workout from "../components/Workout.jsx"
import Countdown from "../components/Countdown.jsx"

class Circuit extends Component {
    render() {
        return (
            <>
                <Logo />
                <Workout />
                <Countdown />
            </>
        )
    }
}

export default Circuit;