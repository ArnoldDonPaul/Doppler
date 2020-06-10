import React, { Component } from "react";
import "../styles/App.scss";
import oceanWaves from "../assets/ocean_waves.mp3"
import subwayCommute from "../assets/subway_commute.mp3"
import busyRestaurant from "../assets/busy_restaurant.mp3"

class Music extends Component {
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
                case "Calming":
                    track = oceanWaves
                    break;
                case "Intermediate":
                    track = subwayCommute
                    break;
                case "Challenging":
                    track = busyRestaurant
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
        const list = [{ id: 1, title: "Calming" }, { id: 2, title: "Intermediate" }, { id: 3, title: "Challenging" }].map(item => {
            return (
                <li
                    className="music__listItem"
                    key={item.id}
                    onClick={() => this.setState({ selectedTrack: item.title })}
                >
                    {item.title}
                </li>
            );
        });

        return (
            <div className="music">
                <h1 className="music__header">Ambient Sounds</h1>
                <ul className="music__list">{list}
                    {this.state.player === "playing" && (
                        <button className="music__listItem" onClick={() => this.setState({ player: "stopped" })}>
                            Stop
                        </button>
                    )}
                </ul>
                <audio loop ref={ref => this.player = ref} />
            </div>
        );
    }
}

export default Music;