import React, { Component } from 'react';
import Ambience from "../components/Ambience.jsx"
import Stopwatch from "../components/Stopwatch.jsx"
import Flame from "../components/Flame.jsx"
import Tips from "../components/Tips.jsx"

class Meditate extends Component {
    render() {
        return (
            <>
                <Ambience />
                <Stopwatch />
                <Flame />
                <Tips />
            </>
        )
    }
}

export default Meditate;