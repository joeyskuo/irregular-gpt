import React, { useState, useEffect } from "react";

const Message = (props) => {

    return (
        <div className={`message message--${props.message.role}`}>
            {props.message.content}
        </div>
    )
}

export default Message;