import React, { useState, useEffect } from "react";
import './ChatContainer.css';
import * as chatBotData from './initialData.json';
import IrregularChatBot from "./IrregularChatBot";

const ChatContainer = (props) => {

    const [uiData, setUiData] = useState(chatBotData);

    const {controllerFunction, initialData } = props;

    useEffect(() => {
        controllerFunction?.('registerUpdateStateFunction', setUiData);
        controllerFunction?.('updateData', uiData);
    }, [controllerFunction]);

    return (
        <div className="chat-bot-container">
            <button onClick={() => controllerFunction('clearMessages')}>Click me to clear messages!</button>
			<button onClick={() => controllerFunction('insertMessage')}>Click me to add a message!</button>
			<button onClick={() => controllerFunction('replaceMessage')}>Click me to replace a message!</button>
			<button onClick={() => controllerFunction('createSketchMessage')}>Click me to create a sketch!</button>
			<button onClick={() => controllerFunction('test')}>Click me to trigger a controller function!</button>
            <IrregularChatBot controllerFunction={controllerFunction} uiData={uiData}/>
        </div>
    )
}

export default ChatContainer;