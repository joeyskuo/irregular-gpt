import './InferenceContent.scss';

const InferenceContent = () => {

    return (
        <div className="info-content--inference">
            <div>
                <h3>Inference</h3>
                <img src="/assets/inference.png"/>
            </div>
            <div className="info-content-columns">
                <div className="info-content-rows">
                    <p>The Claude API is stateless, therefore to maintain context, the entire conversation must be sent with each request. After a user prompt is submitted, Fastify checks Redis for conversation history in the form of a messages array. It appends the user prompt to the array and then makes a request to the Claude API.</p>
                    <p>The Claude API response is streamed through Fastify and back to the user's browser. After receiving the end of the streamed message, the response is also appended to the messages array and set in the Redis cache.</p>
                </div>
                <img className="info-content--redis" src="/assets/redis.png"/>
            </div>
        </div>
    )
};

export default InferenceContent;