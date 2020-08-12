import React, { Component } from "react";
import "../styles/Tips.scss";

class Tips extends Component {
    state = {
        inhaleExpanded: false,
        exhaleExpanded: false,
        attentionExpanded: false
    }
    render() {
        return (
            <div className="tips">
                <p className="tips__text" onClick={() => this.setState({ inhaleExpanded: true })}>Inhale deeply through your nose and into the pit of your stomach.</p>
                {
                    this.state.inhaleExpanded === true && (
                        <div className="tips__expandedWrapper">
                            <ul className="tips__expandedList">
                                <li className="tips__textExpanded">prevent your shoulders from rising.</li>
                                <li className="tips__textExpanded">expand your stomach outward as you inhale.</li>
                            </ul>
                            <p className="tips__minimizeExpanded" onClick={() => this.setState({ inhaleExpanded: false })}>LESS</p>
                        </div>
                    )
                }
                <p className="tips__text" onClick={() => this.setState({ exhaleExpanded: true })}>Exhale slowly through your mouth or nose, emptying the lungs completely.</p>
                {
                    this.state.exhaleExpanded === true && (
                        <div className="tips__expandedWrapper">
                            <ul className="tips__expandedList">
                                <li className="tips__textExpanded">your exhale should take longer than your inhale</li>
                                <li className="tips__textExpanded">slow exhalation will promote a calming sensation throughout the body</li>
                            </ul>
                            <p className="tips__minimizeExpanded" onClick={() => this.setState({ exhaleExpanded: false })}>LESS</p>
                        </div>
                    )
                }
                <p className="tips__text" onClick={() => this.setState({ attentionExpanded: true })}> When attention drifts, bring it back to your pattern of breathing.</p>
                {
                    this.state.attentionExpanded === true && (
                        <div className="tips__expandedWrapper">
                            <ul className="tips__expandedList">
                                <li className="tips__textExpanded">inhale for a count of 2 and exhale for a count of 4-6</li>
                                <li className="tips__textExpanded">practice makes better</li>
                            </ul>
                            <p className="tips__minimizeExpanded" onClick={() => this.setState({ attentionExpanded: false })}>LESS</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Tips;