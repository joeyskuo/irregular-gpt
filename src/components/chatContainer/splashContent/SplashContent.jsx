import React from "react";
import './SplashContent.scss';

const SplashContent = () => {

    return (
        <div className="splash-content">
            <div className="splash-content--prompt">How can Claude help you today?</div>
            <img src="/src/assets/robot.png" />
        </div>
    )
}

export default SplashContent;