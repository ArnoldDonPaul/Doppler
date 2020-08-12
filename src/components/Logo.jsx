import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Logo.scss";

class Flame extends Component {
    render() {
        return (
            <Link to="/">
                <div className="dopplerLogo" >
                    <div className="circle0">
                        <div className="circle1">
                            <div className="circle2">
                                <div className="circle3">
                                    <div className="circle4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Flame;