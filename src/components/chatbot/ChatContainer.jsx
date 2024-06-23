import React, { useState, useEffect } from "react";
import IrregularChatBot from "./IrregularChatBot";

const ChatContainer = () => {
    return (
        <div className="chat-bot-container">
            <button onClick={() => appendMessage('test!')}>
                Test
            </button>
            <IrregularChatBot/>
        </div>
    )
}

export default ChatContainer;