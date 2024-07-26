import { useContext, useEffect, forwardRef } from "react";
import Message from "./Message";
import { MessageContext } from "../../../models/messageContext/MessageContext";
import './MessageContainer.scss';

const MessageContainer = forwardRef<HTMLDivElement>((props, ref) => {

    const { messages } = useContext(MessageContext);

    useEffect(() => {
    }, [messages]);

    return (
        <div className="message-container" ref={ref}>
            {
                messages.map((messageData) => <Message message={messageData} key={messageData.messageId}/>)
            }
        </div>
    )
});

export default MessageContainer;