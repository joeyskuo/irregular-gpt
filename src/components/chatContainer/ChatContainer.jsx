import React, { useState, useEffect, createContext } from "react";
import { useStateRef } from "../../hooks/useStateRef";
import './ChatContainer.scss';
import MessageContainer from "./messageContainer/MessageContainer";
import PromptInput from "./promptInput/PromptInput";
import SplashContent from "./splashContent/SplashContent";
import { MessageContext } from "../../models/messageContext/MessageContext";
import { flushSync } from "react-dom";

const ChatContainer = (props) => {

    const [messages, setMessages, messagesRef] = useStateRef([]);
    const [conversationStarted, setConversationStarted] = useState(false);

    const updateMessages = (data) => {

        const currentMessages = messagesRef.current;
        const currentMessagesLength = currentMessages.length;

        let latestMessage = currentMessages[currentMessages.length-1];
        let updatedMessage = {...latestMessage};
        let newMessages = [...currentMessages];


        if(latestMessage.role === "assistant") {
            updatedMessage.content += data;
            newMessages[newMessages.length-1] = updatedMessage;

        } else {
            updatedMessage = {role: "assistant", content: "" + data, messageId: `hash000-${currentMessagesLength}`};
            newMessages.push(updatedMessage);
        }

        flushSync(() => setMessages(newMessages));
    }

    useEffect(() => {
        const sse = new EventSource("http://localhost:8080/session", { withCredentials: true });
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

    function getCookieValue(name) 
    {
      const regex = new RegExp(`(^| )${name}=([^;]+)`)
      const match = document.cookie.match(regex)
      if (match) {
        return match[2]
      }
   }

    const sendMessage = () => {
        const newMessageArr = [...messages];
        const messageId = Date.now().toString(16);

        newMessageArr.push({role: "user", content: "Test Prompt Sent", messageId: messageId});
        setMessages(newMessageArr);

        if(!conversationStarted) setConversationStarted(true);

        const sessionId = getCookieValue("sessionId");
        fetch(`http://localhost:8080/${sessionId}/inference`);
    }

    return (
        <div className="chat-container">
            {!conversationStarted && <SplashContent />}
            <MessageContext.Provider value={{messages}}>
                {conversationStarted && <MessageContainer />}
            </MessageContext.Provider>
            <PromptInput />
            <button className="test-button" onClick={() => sendMessage("Hello")}>Send Test Message</button>
        </div>
    )
}

export default ChatContainer;