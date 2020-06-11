import React, { Component } from "react";
import "../styles/App.scss";

class About extends Component {
    state = {
        inhaleExpanded: false,
        exhaleExpanded: false,
        attentionExpanded: false
    }
    render() {
        return (
            <div className="about">
                <p className="about__text" onClick={() => this.setState({ inhaleExpanded: true })}>inhale deeply through the nose and into the pit of your stomach.</p>
                {
                    this.state.inhaleExpanded === true && (
                        <ul className="about__expandedList">
                            <li className="about__textExpanded">prevent your shoulders from rising.</li>
                            <li className="about__textExpanded">expand your stomach outward as you inhale.</li>
                        </ul>
                    )
                }
                <p className="about__text" onClick={() => this.setState({ exhaleExpanded: true })}>exhale slowly through your mouth, emptying the lungs completely.</p>
                {
                    this.state.exhaleExpanded === true && (
                        <ul className="about__expandedList">
                            <li className="about__textExpanded">your exhale should take longer than your inhale</li>
                            <li className="about__textExpanded">slow exhalation will promote a calming sensation throughout the body</li>
                        </ul>
                    )
                }
                <p className="about__text" onClick={() => this.setState({ attentionExpanded: true })}> when attention drifts, bring it back to your pattern of breathing.</p>
                {
                    this.state.attentionExpanded === true && (
                        <ul className="about__expandedList">
                            <li className="about__textExpanded">inhale for a count of 2 and exhale for a count of 4-6</li>
                            <li className="about__textExpanded">practice makes better</li>
                        </ul>
                    )
                }
            </div >
        );
    }
}

export default About;