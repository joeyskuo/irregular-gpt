import React from "react";
import './SlimeScreen.scss';
import ChatContainer from "../chatContainer/ChatContainer";

const SlimeScreen = () => {
    return (
        <div className="slime-screen">
            <div className="slime-screen-heading">
                <span className="slime-screen-heading--title">IrregularGPT</span>
                <span className="slime-screen-heading--version">v0.1.0</span>
            </div>
            <ChatContainer />
        </div>
    )
}

export default SlimeScreen;