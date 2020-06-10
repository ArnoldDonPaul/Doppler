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
                        <p>TEST</p>
                    )
                }
                <p className="about__text">exhale slowly through your mouth, emptying the lungs completely.</p>
                <p className="about__text"> when attention drifts, bring it back to your pattern of breathing.</p>
            </div >
        );
    }
}

export default About;