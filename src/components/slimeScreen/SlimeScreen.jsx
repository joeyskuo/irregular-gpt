import React from "react";
import './SlimeScreen.css';
import ChatContainer from "../chatbot/ChatContainer";
import ChatBotController from "../chatbot/ChatBotController";

const SlimeScreen = () => {
    return (
        <div className="slime-screen">
            <ChatContainer controllerFunction={ChatBotController}/>
        </div>
    )
}

export default SlimeScreen;