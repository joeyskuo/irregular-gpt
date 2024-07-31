import './OverviewContent.scss';

const OverviewContent = () => {

    return (
        <div className="info-content--overview">
            <h3>Diagram</h3>
            <img src="assets/overview.svg" />
            <p>The client-side code is hosted as a static website on a S3 bucket while the backend is deployed on an EC2 instance. The instance has Nginx, Fastify, and Redis running.</p>
            <p>The Fastify backend
                <ul>
                    <li>manages sessions between multiple concurrent users</li>
                    <li>configures the base settings for inference calls to the Claude API</li>
                    <li>caches the conversation context and token usage in redis</li>
                    <li>runs scheduled jobs to clear sessions and cached conversations</li>
                    <li>makes inference calls to the Claude API and streams the response through server-sent events</li>
                </ul>
            </p>
            <p>The React frontend
                <ul>
                    <li>initializes a session with the backend</li>
                    <li>handles the rendering of incremental messages from server-sent events</li>
                </ul>
            </p>

        </div>
    )
};

export default OverviewContent;