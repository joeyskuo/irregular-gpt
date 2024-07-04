import React, { useState, useEffect, createContext } from "react";
import { useStateRef } from "../../hooks/useStateRef";
import './ChatContainer.css';
import MessageContainer from "./messageContainer/MessageContainer";
import { MessageContext } from "../../models/messageContext/MessageContext";
import { flushSync } from "react-dom";

const ChatContainer = (props) => {

    const [messages, setMessages, messagesRef] = useStateRef([{role: "assistant", content: "How can Claude help you today?", messageId: "hash07ae1"}]);

    const updateMessages = (data) => {
        
        const currentMessages = messagesRef.current;
        const currentMessagesLength = currentMessages.length;

        let latestMessage = currentMessages[currentMessages.length-1];
        let updatedMessage = {...latestMessage};
        let newMessages = [...currentMessages];


        if(latestMessage.role === "user") {
            updatedMessage.content += data;
            newMessages[newMessages.length-1] = updatedMessage;

        } else {
            updatedMessage = {role: "user", content: "" + data, messageId: `hash000-${currentMessagesLength}`};
            newMessages.push(updatedMessage);
        }

        flushSync(() => setMessages(newMessages));
    }

    useEffect(() => {
        const sse = new EventSource("http://localhost:8080/stream");
        console.log('eventSource created!');

        sse.addEventListener("message", (messageObject) => {

            const data = messageObject.data;
            const sanitizedData = data.replaceAll('\"', '');

            updateMessages(sanitizedData)
        });

        return () => {
            console.log('eventSource closed!');
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