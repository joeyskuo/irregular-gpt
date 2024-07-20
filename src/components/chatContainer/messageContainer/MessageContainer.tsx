import { useContext, useEffect } from "react";
import Message from "./Message";
import { MessageContext } from "../../../models/messageContext/MessageContext";
import './MessageContainer.scss';

const MessageContainer = () => {

    const { messages } = useContext(MessageContext);

    useEffect(() => {
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