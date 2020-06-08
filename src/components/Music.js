import React, { Component } from "react";
import "../styles/App.scss";
import oceanWaves from "../assets/ocean_waves.mp3"
import subwayCommute from "../assets/subway_commute.mp3"
import busyRestaurant from "../assets/busy_restaurant.mp3"

class Music extends Component {
    state = {
        selectedTrack: null
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedTrack !== prevState.selectedTrack) {
            let track;
            switch (this.state.selectedTrack) {
                case "Ocean Waves":
                    track = oceanWaves
                    break;
                case "Subway Commute":
                    track = subwayCommute
                    break;
                case "Busy Restaurant":
                    track = busyRestaurant
                    break;
                default:
                    break;
            }
            if (track) {
                this.player.src = track;
                this.player.play()
            }
        }
    }

    render() {
        const list = [{ id: 1, title: "Ocean Waves" }, { id: 2, title: "Subway Commute" }, { id: 3, title: "Busy Restaurant" }].map(item => {
            return (
                <li
                    key={item.id}
                    onClick={() => this.setState({ selectedTrack: item.title })}
                >
                    {item.title}
                </li>
            );
        });

        return (
            <div className="music">
                <h1>Ambient Sounds</h1>
                <ul>{list}</ul>
                <audio ref={ref => this.player = ref} />
            </div>
        );
    }
}

export default Music;