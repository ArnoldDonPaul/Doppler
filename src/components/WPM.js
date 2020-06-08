import React, { useState } from "react";
import { Generate } from "../components/Words"

import "../styles/App.scss";

function WPM() {

    const initialWords = "I am " + Generate();

    const [leftPadding, setLeftPadding] = useState(
        new Array(20).fill(' ').join(''),
    );

    const [outgoingChars, setOutgoingChars] = useState('');
    const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
    const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));

    const [wordCount, setWordCount] = useState(0);

    const [typedChars, setTypedChars] = useState('');

    useKeyPress(key => {

        let updatedOutgoingChars = outgoingChars;
        let updatedIncomingChars = incomingChars;
        if (key === currentChar) {
            if (leftPadding.length > 0) {
                setLeftPadding(leftPadding.substring(1));
            }
            updatedOutgoingChars += currentChar;
            setOutgoingChars(updatedOutgoingChars);

            setCurrentChar(incomingChars.charAt(0));

            updatedIncomingChars = incomingChars.substring(1);
            if (updatedIncomingChars.split(' ').length < 10) {
                updatedIncomingChars += ' ' + generate();
            }
            setIncomingChars(updatedIncomingChars);

            if (incomingChars.charAt(0) === ' ') {
                setWordCount(wordCount + 1);
            }

            const updatedTypedChars = typedChars + key;
            setTypedChars(updatedTypedChars);
        }
    }
    );
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
    );
};

export default WPM;