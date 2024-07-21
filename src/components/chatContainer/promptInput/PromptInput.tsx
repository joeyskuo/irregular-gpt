import './PromptInput.scss';

const PromptInput = () => {


    return (
        <div className="prompt-input-wrapper">
            <div   className="prompt-input" 
                        placeholder="Reply to IrregularGPT.."
                        contentEditable
                        autoFocus/>
        </div>
    )
}

export default PromptInput;