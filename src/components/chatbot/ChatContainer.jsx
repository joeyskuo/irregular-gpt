import React, { useState, useEffect } from "react";
import './ChatContainer.css';
import IrregularChatBot from "./IrregularChatBot";

const ChatContainer = (props) => {

    const [uiData, setUiData] = useState(null);

    const {controllerFunction, initialData } = props;

    useEffect(() => {
        controllerFunction?.('registerUpdateStateFunction', setUiData);
    }, [controllerFunction]);

    const data = uiData ?? initialData;

    return (
        <div className="chat-bot-container">
            <IrregularChatBot controllerFunction={controllerFunction}/>
        </div>
    )
}

export default ChatContainer;