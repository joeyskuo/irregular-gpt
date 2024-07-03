import React, { useState, useEffect } from "react";
import './ChatContainer.css';

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
        </div>
    )
}

export default ChatContainer;