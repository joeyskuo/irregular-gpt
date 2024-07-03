import React, { useState, useEffect } from "react";
import Message from "./Message";

const MessageContainer = (props) => {

    const [messages, setMessages] = useState([{role: "assistant", content: "How can Claude help you today?"}]);

    return (
        <div className="message-container">
            {
                messages.map((messageData) => <Message message={messageData} />)
            }
        </div>
    )
}

export default MessageContainer;