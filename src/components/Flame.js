import React, { Component } from "react";
import "../styles/Flame.scss";

class Flame extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="clickBox">
                    <div className="flame red"></div>
                    <div className="flame orange"></div>
                    <div className="flame gold"></div>
                    <div className="flame white"></div>
                </div>
                <div className="base blue"></div>
                <div className="base black"></div>
            </div>
        )
    }
}

export default Flame;