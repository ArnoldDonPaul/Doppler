import React, { Component } from "react";
import "../styles/App.scss";

class Countdown extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: this.state.timerTime
        });
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 10;
            if (newTime >= 0) {
                this.setState({
                    timerTime: newTime
                });
            } else {
                clearInterval(this.timer);
                this.setState({ timerOn: false });
                alert("Countdown ended");
            }
        }, 10);
    };

    resetTimer = () => {
        if (this.state.timerOn === false);
        this.setState({
            timerTime: this.state.timerStart
        });
    }

    render() {
        const { timerTime, timerStart, timerOn } = this.state;
        let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
        // let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
        // let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

        return (
            <div className="Countdown">
                <div className="Countdown-header">Countdown</div>

                <div className="Countdown-display">

                    <div className="Countdown-time">
                        {seconds}
                    </div>

                </div>
                {timerOn === false &&
                    (timerStart === 0 || timerTime === timerStart) && (
                        <button onClick={this.startTimer}>Start</button>
                    )}
            </div>
        );
    }
}

export default Countdown;