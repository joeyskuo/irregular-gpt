import './SlimeScreen.scss';
import ChatContainer from "../chatContainer/ChatContainer";

type SlimeScreenProps = {
    screenMode: string
}

const SlimeScreen = (props : SlimeScreenProps) => {

    const { screenMode } = props;

    return (
        <div className={`slime-screen screen-mode--${screenMode}`}>
            <ChatContainer />
        </div>
    )
}

export default SlimeScreen;