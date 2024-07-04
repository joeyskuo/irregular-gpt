import React, { useState, useContext, useEffect } from "react";
import Message from "./Message";
import { MessageContext } from "../../../models/messageContext/MessageContext";
import './MessageContainer.css';

const MessageContainer = (props) => {

    const {messages} = useContext(MessageContext);

    useEffect(() => {
        console.log(messages.at(-1));
    }, [messages]);

    return (
        <div className="message-container">
            {
                messages.map((messageData) => <Message message={messageData} key={messageData.messageId}/>)
            }
        </div>
    )
}

export default MessageContainer;