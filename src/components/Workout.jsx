import React, { Component } from "react";
import "../styles/Workout.scss";

const warmUpExercises = [
    "jumping jacks",
    "jog in place",
    "hop in place",
    "burpees",
]

const upperExercises = [
    "incline pushups",
    "pushups",
    "decline pushups",
    "close-hand pushups",
    "wide-hand pushups",
    "pull-ups",
    "chin-ups",
]
const lowerExercises = [
    "squats",
    "squat jumps",
    "lunges",
    "calf raises",
    "wall sit",
]
const coreExercises = [
    "plank",
    "mountain climbers",
    "leg raises",
    "crunches",
    "bicycle crunches",
    "dead bug",
]

class Workout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            warmUp: '',
            upper: '',
            lower: '',
            core: '',
        }
    }

    getWorkout = () => {
        const randomWarmUp = Math.floor(Math.random() * warmUpExercises.length);
        const warmUp = warmUpExercises[randomWarmUp]

        const randomUpper = Math.floor(Math.random() * upperExercises.length);
        const upper = upperExercises[randomUpper]

        const randomLower = Math.floor(Math.random() * lowerExercises.length);
        const lower = lowerExercises[randomLower]

        const randomCore = Math.floor(Math.random() * coreExercises.length);
        const core = coreExercises[randomCore]

        this.setState({
            warmUp: warmUp,
            upper: upper,
            lower: lower,
            core: core,
        })
    }
    render() {
        return (
            <section className="workout">
                <h1 className="workout__title">3 minute workout</h1>
                <p className="workout__instruction">Create a circuit and start the timer</p>
                <p className="workout__instruction">Complete 45 seconds of each exercise back-to-back!</p>
                <div className="circuit">
                    <button className="circuit__button" onClick={this.getWorkout}>Create Circuit</button>
                    <div className="circuit__box">
                        <p className="circuit__exercise">{this.state.warmUp}</p>
                        <p className="circuit__exercise">{this.state.upper}</p>
                        <p className="circuit__exercise">{this.state.lower}</p>
                        <p className="circuit__exercise">{this.state.core}</p>
                    </div>
                </div>
                <p className="workout__instruction">Once you start, there's no stopping</p>
            </section>
        )
    }
}

export default Workout;