import React from "react";

function Generate() {
    let myArray = [
        "Apples",
        "Bananas",
        "Pears"
    ];

    return randomItem = myArray[Math.floor(Math.random() * myArray.length)];
}

export default Generate;