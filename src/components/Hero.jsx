import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.scss";

class Hero extends Component {
    render() {
        return (
            <section className="hero">
                <div className="welcome">
                    <h1 className="welcome__title">take 5 minutes for yourself</h1>
                    <Link to="/circuit" className="welcome__nav">3 minutes for your body</Link>
                    <Link to="/meditate" className="welcome__nav">2 minutes for your mind</Link>
                </div>
            </section>
        );
    }
}

export default Hero;