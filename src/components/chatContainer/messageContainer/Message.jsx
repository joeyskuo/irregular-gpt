import React, { useState, useEffect } from "react";

const Message = (props) => {

    return (
        <div className="message">
            {props.message.content}
        </div>
    )
}

export default Message;