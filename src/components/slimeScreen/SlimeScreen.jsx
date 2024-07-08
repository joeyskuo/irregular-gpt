import React from "react";
import './SlimeScreen.scss';
import ChatContainer from "../chatContainer/ChatContainer";

const SlimeScreen = () => {
    return (
        <div className="slime-screen">
            <div className="slime-screen--heading">IrregularGPT</div>
            <ChatContainer />
        </div>
    )
}

export default SlimeScreen;