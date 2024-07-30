import './InfoScreen.scss';

const InfoScreen = () => {
    return (
        <div className="info-screen">
            <div className='info-nav'>
                <div className="info-nav-topic">Architecture</div>
                <div className="info-nav-topic">Component Graph</div>
                <div className="info-nav-topic">Solutions</div>
            </div>
            <div className='info-box'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consequatur dignissimos nobis vitae odit facere pariatur quod, eum ex deserunt, rem, eaque est? Rerum magni, qui sit quas illo voluptatum?</p>
            </div>
        </div>
    )
}

export default InfoScreen;