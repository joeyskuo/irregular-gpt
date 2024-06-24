import React, { useState, useEffect } from "react";
import './ChatContainer.css';
import IrregularChatBot from "./IrregularChatBot";

const ChatContainer = (props) => {

    const [uiData, setUiData] = useState({messages: []});

    const {controllerFunction, initialData } = props;

    useEffect(() => {
        controllerFunction?.('registerUpdateStateFunction', setUiData);
        controllerFunction?.('setInitialData');
    }, [controllerFunction]);

    return (
        <div className="chat-bot-container">
            <IrregularChatBot controllerFunction={controllerFunction} uiData={uiData}/>
        </div>
    )
}

export default ChatContainer;