import React, { Component } from "react";
import "../styles/App.scss";

class Flame extends Component {
    render() {
        return (
            <div class="wrapper">
                <div class="flame-wrapper">
                    <div class="flame red"></div>
                    <div class="flame orange"></div>
                    <div class="flame gold"></div>
                    <div class="flame white"></div>
                    <div class="base blue"></div>
                    <div class="base black"></div>
                </div>
            </div>
        )
    }
}

export default Flame;