import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Countdown.scss";

class Countdown extends Component {
    constructor() {
        super();
        this.state = { time: {}, seconds: 180 };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.exerciseComplete = false;
        this.exercise1 = '☆';
        this.exercise2 = '☆';
        this.exercise3 = '☆';
        this.exercise4 = '☆';
    }

    secondsToTime(secs) {

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "m": minutes,
            "s": seconds
        };

        return obj
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        if (seconds > 0) {
            this.setState({
                exercise1: '☆',
                exercise2: '☆',
                exercise3: '☆',
                exercise4: '☆',
            })
        }

        if (seconds < 135) {
            this.setState({
                exercise1: '★',
            })
        }

        if (seconds < 90) {
            this.setState({
                exercise2: '★',
            })
        }

        if (seconds < 45) {
            this.setState({
                exercise3: '★',
            })
        }

        // Check if we're at zero.
        if (seconds === 0) {
            clearInterval(this.timer);
            this.setState({
                exerciseComplete: true,
                exercise4: '★',
            })
        }
    }

    render() {
        return (
            <section className="timerSection">
                <div className="progress">
                    <p className="progress__star">{this.state.exercise1}</p>
                    <p className="progress__star">{this.state.exercise2}</p>
                    <p className="progress__star">{this.state.exercise3}</p>
                    <p className="progress__star">{this.state.exercise4}</p>
                </div>
                <div className="timer">
                    <button className="timer__button" onClick={this.startTimer}>Start</button>
                    <div className="timer__display">
                        <div className="timer__displayMinutes">
                            <h2 className="timerTitle">minutes</h2>
                            <p className="timerTime">{this.state.time.m}</p>
                        </div>
                        <p className="timerColon">:</p>
                        <div className="timer__displaySeconds">
                            <h2 className="timerTitle">seconds</h2>
                            <p className="timerTime">{this.state.time.s}</p>
                        </div>
                    </div>
                    {
                        this.state.exerciseComplete === true && (
                            <Link to="/meditate" className="complete">Complete</Link>
                        )
                    }
                </div>
            </section>
        );
    }
}
export default Countdown;