import React, { useState, useEffect } from "react";
import testIcon from '../../../assets/icon.svg';
import './Message.css';

const Message = (props) => {

    return (
        <div className={`message message--${props.message.role}`}>
            <span className='message-role-icon'>
                <img src={testIcon} />
            </span>
            <span className='message-content'>
                <div className='message-content-header'>{props.message.role}</div>
                <div className='message-content-text'>{props.message.content}</div>
            </span>
        </div>
    )
}

export default Message;