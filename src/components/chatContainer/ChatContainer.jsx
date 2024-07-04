import React, { useState, useEffect, createContext } from "react";
import { useStateRef } from "../../hooks/useStateRef";
import './ChatContainer.css';
import MessageContainer from "./messageContainer/MessageContainer";
import { MessageContext } from "../../models/messageContext/MessageContext";

const ChatContainer = (props) => {

    const [messages, setMessages, messagesRef] = useStateRef([{role: "assistant", content: "How can Claude help you today?", messageId: "hash07ae1"}]);

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