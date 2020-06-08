import React, { Component, useState } from "react";
import generate from "../components/Words"

import "../styles/App.scss";

class WPM extends Component {
    render() {
        const initialWords = "I am " + generate();
        const [leftPadding, setLeftPadding] = useState(
            new Array(20).fill(' ').join(''),
        );
        const [outgoingChars, setOutgoingChars] = useState('');
        const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
        const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));
        return (
            <>
                <p className="Character">
                    <span className="Character-out">
                        {(leftPadding + outgoingChars).slice(-20)}
                    </span>
                    <span className="Character-current">{currentChar}</span>
                    <span>{incomingChars.substr(0, 20)}</span>
                </p>
            </>
        )
    }
}

export default WPM;