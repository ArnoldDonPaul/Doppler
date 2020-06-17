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
                <div className="aboutDisplay">
                    <p className="about__text" onClick={() => this.setState({ inhaleExpanded: true })}>Inhale deeply through the nose and into the pit of your stomach.</p>
                    {
                        this.state.inhaleExpanded === true && (
                            <div className="about__expandedWrapper">
                                <ul className="about__expandedList">
                                    <li className="about__textExpanded">prevent your shoulders from rising.</li>
                                    <li className="about__textExpanded">expand your stomach outward as you inhale.</li>
                                </ul>
                                <p className="about__minimizeExpanded" onClick={() => this.setState({ inhaleExpanded: false })}>LESS</p>
                            </div>
                        )
                    }
                    <p className="about__text" onClick={() => this.setState({ exhaleExpanded: true })}>Exhale slowly through your mouth, emptying the lungs completely.</p>
                    {
                        this.state.exhaleExpanded === true && (
                            <div className="about__expandedWrapper">
                                <ul className="about__expandedList">
                                    <li className="about__textExpanded">your exhale should take longer than your inhale</li>
                                    <li className="about__textExpanded">slow exhalation will promote a calming sensation throughout the body</li>
                                </ul>
                                <p className="about__minimizeExpanded" onClick={() => this.setState({ exhaleExpanded: false })}>LESS</p>
                            </div>
                        )
                    }
                    <p className="about__text" onClick={() => this.setState({ attentionExpanded: true })}> When attention drifts, bring it back to your pattern of breathing.</p>
                    {
                        this.state.attentionExpanded === true && (
                            <div className="about__expandedWrapper">
                                <ul className="about__expandedList">
                                    <li className="about__textExpanded">inhale for a count of 2 and exhale for a count of 4-6</li>
                                    <li className="about__textExpanded">practice makes better</li>
                                </ul>
                                <p className="about__minimizeExpanded" onClick={() => this.setState({ attentionExpanded: false })}>LESS</p>
                            </div>
                        )
                    }
                </div >
            </div>
        );
    }
}

export default About;