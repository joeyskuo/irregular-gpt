import './PromptInput.scss';

type PromptInputProps = {
    sendMessage: (message: string) => void
}

const PromptInput = ({sendMessage} : PromptInputProps) => {

    const handleKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {

        if(evt.key === 'Enter') {

            const inputElement = evt.currentTarget;
            const prompt = inputElement.textContent;
            sendMessage(prompt || "");
            inputElement.innerHTML = '';
            inputElement.blur();
        }
    }

    return (
        <div className="prompt-input-wrapper">
            <div   className="prompt-input" 
                        placeholder="Reply to IrregularGPT.."
                        contentEditable
                        autoFocus
                        onKeyDown={handleKeyDown}
                        />
        </div>
    )
}

export default PromptInput;