import './SessionContent.scss';

const SessionContent = () => {

    return (
        <div className="info-content--session">
            <h3>Sessions</h3>
            <img className="info-content-session--diagram" src="/assets/sessions.png"/>
            <p>On page load, a session is established with the user, allowing for incoming server-sent events. The reference to the session is stored in a global object, with the ip as the key to disallow other users from using the same session (as an initial implementation). Upon sending a prompt, the corresponding session is looked up and the message-events from the Claude API are pushed to the client.</p>
            <div>
                <span>Session creation and push methods are implemented using the better-sse library&nbsp;&nbsp;&nbsp;</span>
                <a href="https://github.com/MatthewWid/better-sse" target="_blank" rel="noopener noreferrer">
                    <img className='img-github-link' src='assets/github-mark.svg'/>
                </a>
            </div>
        </div>
    )
};

export default SessionContent;