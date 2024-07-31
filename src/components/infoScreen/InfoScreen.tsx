import { useState } from "react";
import './InfoScreen.scss';

type InfoScreenProps = {
    hideInfo: React.MouseEventHandler<HTMLElement>
}

const InfoScreen = (props : InfoScreenProps) => {

    const [topic, setTopic] = useState<string>("overview");
    const { hideInfo } = props;

    return (
        <div className="info-screen" onClick={hideInfo}>
            <div className='info-nav'>
                <div className="info-nav-topic">
                    <div className="info-nav-topic--title">Architecture</div>
                    <div className="info-nav-item-container">
                        <div className="info-nav-item" onClick={() => setTopic("overview")}>Overview</div>
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
                        <div className="info-nav-item" onClick={() => setTopic("component-graph")}>Component Graph</div>
                        <div className="info-nav-item" onClick={() => setTopic("sse")}>Server-Sent Events</div>
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
                        <div className="info-nav-item" onClick={() => setTopic("inference")}>Inference</div>
                        <div className="info-nav-item" onClick={() => setTopic("job-scheduling")}>Job Scheduling</div>
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