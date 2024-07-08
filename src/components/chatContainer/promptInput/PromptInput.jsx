import React from "react";
import './PromptInput.scss';

const PromptInput = () => {


    return (
        <div className="prompt-input-wrapper">
            <input className="prompt-input" type="text" placeholder="Reply to IrregularGPT.." autoFocus/>
        </div>
    )
}

export default PromptInput;