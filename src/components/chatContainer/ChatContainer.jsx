import React, { useState, useEffect, createContext } from "react";
import './ChatContainer.css';
import MessageContainer from "./messageContainer/MessageContainer";
import { MessageContext } from "../../models/messageContext/MessageContext";

const ChatContainer = (props) => {

    useEffect(() => {
        const sse = new EventSource("http://localhost:8080/stream", {withCredentials: false });
        console.log('eventSource created!');

        sse.addEventListener("message", ({ data }) => {
            console.log(data);
        });

        return () => {
            sse.close();
        }
    }, []);

    return (
        <div className="chat-container">
            <MessageContext.Provider value={{messages}}>
                <MessageContainer />
            </MessageContext.Provider>
        </div>
    )
}

export default ChatContainer;