import './InfoScreen.scss';

const InfoScreen = () => {
    return (
        <div className="info-screen">
            <div className='info-nav'>
                <div className="info-nav-topic">
                    <div className="info-nav-topic--title">Architecture</div>
                    <div className="info-nav-item-container">
                        <div className="info-nav-item">Overview</div>
                    </div>
                </div>
                <div className="info-nav-topic">
                    <div className="info-nav-topic--title">Frontend</div>
                    <div className="info-nav-item-container">
                        <div className="info-nav-item">Component Graph</div>
                        <div className="info-nav-item">Server-Sent Events</div>
                        <div className="info-nav-item">Repo: irregular-gpt</div>
                    </div>
                </div>
                <div className="info-nav-topic">
                    <div className="info-nav-topic--title">Backend</div>
                    <div className="info-nav-item-container">
                        <div className="info-nav-item">Inference</div>
                        <div className="info-nav-item">Job Scheduling</div>
                        <div className="info-nav-item">Repo: irregular-api</div>
                    </div>
                </div>
            </div>
            <div className='info-box'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consequatur dignissimos nobis vitae odit facere pariatur quod, eum ex deserunt, rem, eaque est? Rerum magni, qui sit quas illo voluptatum?</p>
            </div>
        </div>
    )
}

export default InfoScreen;