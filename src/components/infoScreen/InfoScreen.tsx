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
                <div className="info-nav-topic--title">
                        <span>Frontend</span>
                        <a href="https://github.com/joeyskuo/irregular-gpt" target="_blank" rel="noopener noreferrer">
                            <img className='img-github-link' src='assets/github-mark.svg'/>
                        </a>
                    </div>
                    <div className="info-nav-item-container">
                        <div className="info-nav-item">Component Graph</div>
                        <div className="info-nav-item">Server-Sent Events</div>
                    </div>
                </div>
                <div className="info-nav-topic">
                    <div className="info-nav-topic--title">
                        <span>Backend</span>
                        <a href="https://github.com/joeyskuo/irregular-api" target="_blank" rel="noopener noreferrer">
                            <img className='img-github-link' src='assets/github-mark.svg'/>
                        </a>
                    </div>
                    <div className="info-nav-item-container">
                        <div className="info-nav-item">Inference</div>
                        <div className="info-nav-item">Job Scheduling</div>
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