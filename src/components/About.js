import React, { Component } from "react";
import "../styles/App.scss";

class About extends Component {
    render() {
        return (
            <div className="about">
                <p className="about__text">inhale deeply through the nose and into the pit of your stomach.</p>
                <p className="about__text">exhale slowly through your mouth, emptying the lungs completely.</p>
                <p className="about__text"> when attention drifts, bring it back to your pattern of breathing.</p>
            </div>
        );
    }
}

export default About;