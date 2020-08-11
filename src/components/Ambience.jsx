import React, { Component } from "react";
import "../styles/Ambience.scss";
import nature from "../assets/nature.mp3";
import oceanWaves from "../assets/ocean_waves.mp3";
import subwayCommute from "../assets/subway_commute.mp3";

class Ambience extends Component {
    state = {
        selectedTrack: null,
        player: "stopped"
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.player !== prevState.player) {
            if (this.state.player === "stopped") {
                this.player.pause();
                this.setState({ selectedTrack: null });
            }
        }
        if (this.state.selectedTrack !== prevState.selectedTrack) {
            let track;
            switch (this.state.selectedTrack) {
                case "Ocean Waves":
                    track = oceanWaves
                    break;
                case "Nature":
                    track = nature
                    break;
                case "Subway Ride":
                    track = subwayCommute
                    break;
                default:
                    break;
            }
            if (track) {
                this.player.src = track;
                this.player.play()
                this.setState({ player: "playing" })
            }
        }
    }

    render() {
        const list = [{ id: 1, title: "Nature" },
        { id: 2, title: "Ocean Waves" },
        { id: 3, title: "Subway Ride" }
        ].map(item => {
            return (
                <li
                    className="ambience__listItem"
                    key={item.id}
                    onClick={() => this.setState({ selectedTrack: item.title })}
                >
                    {item.title}
                </li>
            );
        });

        return (
            <section className="ambience">
                <h1 className="ambience__title">Ambience</h1>
                <ul className="ambience__list">
                    {list}
                    {this.state.player === "playing" && (
                        <li className="ambience__listItem" onClick={() => this.setState({ player: "stopped" })}>
                            Silence
                        </li>
                    )}
                </ul>
                <audio loop ref={ref => this.player = ref} />
            </section>
        );
    }
}

export default Ambience;