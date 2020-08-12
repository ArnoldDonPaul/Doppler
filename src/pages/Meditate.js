import React, { Component } from 'react';
import Logo from "../components/Logo.jsx"
import Ambience from "../components/Ambience.jsx"
import Stopwatch from "../components/Stopwatch.jsx"
import Flame from "../components/Flame.jsx"
import Tips from "../components/Tips.jsx"

class Meditate extends Component {
    render() {
        return (
            <>
                <Logo />
                <Ambience />
                <Stopwatch />
                <Flame />
                <Tips />
            </>
        )
    }
}

export default Meditate;