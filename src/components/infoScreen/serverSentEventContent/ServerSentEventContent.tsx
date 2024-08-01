import './ServerSentEventContent.scss';

const ServerSentEventContent = () => {

    return (
        <div className="info-content--sse">
            <p>When the application is first started, a new session is established with the Fastify backend. An event listener is then created for 'message' events from this session. Upon submitting a prompt for the Claude API, the response comes back in chunks through these message events. For each message-event, the event-handler would append to the current message (referencing the messageId) and invoke the setMessages hook.</p>
            <p>const [messages, setMessages] = useState( [] )</p>
            <div>
                <p> Two issues occurred during this implementation</p>
                <ul>
                    <li>Upon each message-event, when referencing the messages state variable, the value would not be up-to-date</li>
                    <li>React 18's batched updates would invoke the setMessages hook once instead of on each message-event</li>
                </ul>
            </div>
            <p>Inside the event loop, the event handler functions used the value of the messages state variable at the time of their event trigger. To resolve this, the useRef hook was utilized so that latest value is accessed upon each message-event. Regarding the batched update issue, the current approach was to use flushSync which updates the DOM immediately for each message-event. The react.dev docs don't recommend the usage of flushSync as it can hurt performance, therefore an alternative will be needed.</p>
            <p>Minimizing the re-renders occurring for each message-event on a component-basis is ideal, and so instead of prop drilling, the React Context API was utilized to isolate the updates to the MessageContainer.</p>
            <p>The application can be much simpler without using server-sent events, with the inference API allowing for a full prompt-response per request, instead of streamed message chunks. The streaming implementation of the Claude API was chosen to tackle the technical challenges regarding its utilization.</p>
        </div>
    )
};

export default ServerSentEventContent;