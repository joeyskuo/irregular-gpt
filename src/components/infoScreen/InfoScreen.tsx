import { useState } from "react";
import './InfoScreen.scss';
import OverviewContent from "./overviewContent/OverviewContent";
import ServerSentEventContent from "./serverSentEventContent/ServerSentEventContent";
import InferenceContent from "./inferenceContent/InferenceContent";
import JobSchedulingContent from "./jobSchedulingContent/JobSchedulingContent";
import ComponentDiagramContent from "./componentDiagramContent/ComponentDiagramContent";

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
                    <div className="info-nav-topic--title">Infrastructure</div>
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
                        <div className="info-nav-item" onClick={() => setTopic("component-graph")}>Component Diagram</div>
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
                {(topic === 'overview') && <OverviewContent />}
                {(topic === 'component-graph') && <ComponentDiagramContent/>}
                {(topic === 'sse') && <ServerSentEventContent />}
                {(topic === 'inference') && <InferenceContent />}
                {(topic === 'job-scheduling') && <JobSchedulingContent />}
            </div>
        </div>
    )
}

export default InfoScreen;