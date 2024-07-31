import './SlimeScreen.scss';
import ChatContainer from "../chatContainer/ChatContainer";

type SlimeScreenProps = {
    screenMode: string
}

const SlimeScreen = (props : SlimeScreenProps) => {

    const { screenMode } = props;

    return (
        <div className={`slime-screen screen-mode--${screenMode}`}>
            <div className="slime-screen-heading">
                <span className="slime-screen-heading--title">IrregularGPT</span>
                <span className="slime-screen-heading--version">v0.3.1</span>
            </div>
            <ChatContainer />
        </div>
    )
}

export default SlimeScreen;