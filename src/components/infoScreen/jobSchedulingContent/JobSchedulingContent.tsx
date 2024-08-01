import './JobSchedulingContent.scss';

const JobSchedulingContent = () => {

    return (
        <div className="info-content--jobs">
            <h3>Job Scheduling</h3>
            <p>Jobs are scheduled in the Fastify server using the Toad Scheduler package.</p>
            <div>
                <p>There are two scheduled jobs</p>
                <ul>
                    <li>Clear Redis Cache (Every week)</li>
                    <li>Clear Inactive Sessions (Every hour)</li>
                </ul>
            </div>
            <p>Redis stores the token usage and latest conversation for each user. Each user has a limit to their weekly token usage, and this job resets their usage metrics at the end of the week. The conversation data is also cleared, though that is reset by default on each visit/refresh of the application.</p>
            <p>The object referencing each session includes a 'lastActive' property for that session. The second job iterates through each 'lastActive' property and deletes the session if it has not been active for over an hour.</p>
        </div>
    )
};

export default JobSchedulingContent;