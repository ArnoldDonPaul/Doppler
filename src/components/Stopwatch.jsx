import React, { Component } from "react";
import "../styles/Stopwatch.scss";

class Stopwatch extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };

    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    };

    render() {

        const { timerTime } = this.state;
        // let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        // let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

        return (
            <section>
                <div className="stopwatch">
                    <p className="stopwatch__text">Start the timer and follow the instructions below</p>
                    <p className="stopwatch__text">Use the flame as a focal point if you need it</p>
                    <p className="stopwatch__text">Be present for 2 minutes</p>
                    <div className="stopwatch__display">
                        {minutes} : {seconds}
                        <ul className="stopwatch__buttonsWrapper">
                            {this.state.timerOn === false && this.state.timerTime === 0 && (
                                < li className="stopwatch__button" onClick={this.startTimer}>Start</li>
                            )}
                            {this.state.timerOn === true && (
                                < li className="stopwatch__button" onClick={this.stopTimer}>Stop</li>
                            )}
                            {this.state.timerOn === false && this.state.timerTime > 0 && (
                                < li className="stopwatch__button" onClick={this.startTimer}>Resume</li>
                            )}
                            {this.state.timerOn === false && this.state.timerTime > 0 && (
                                < li className="stopwatch__button" onClick={this.resetTimer}>Reset</li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Stopwatch;