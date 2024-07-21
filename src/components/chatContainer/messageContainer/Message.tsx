import { TMessage } from '../../../types/api';
import './Message.scss';

type MessageProps = {
    message: TMessage
}

const Message = ({ message } : MessageProps) => {

    return (
        <div className={`message message--${message.role}`}>
            <span className='message-role-icon'>
                {message.role === 'user' && <img src='/src/assets/userIcon.png' />}
                {message.role === 'assistant' && <img src='/src/assets/robotIcon.svg' />}
            </span>
            <span className='message-content'>
                <div className='message-content-header'>{message.role}</div>
                <div className='message-content-text'>{message.content}</div>
            </span>
        </div>
    )
}

export default Message;