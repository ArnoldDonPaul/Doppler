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
                <ul className="music__list">{list}</ul>
                <audio loop ref={ref => this.player = ref} />
            </div>
        );
    }
}

export default Music;