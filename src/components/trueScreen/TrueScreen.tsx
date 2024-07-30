import { useState } from "react";
import SlimeScreen from '../slimeScreen/SlimeScreen';
import InfoScreen from "../infoScreen/InfoScreen";
import './TrueScreen.scss';

const TrueScreen = () => {

    const [showInfo, setShowInfo] = useState<boolean>(false);
    const [screenMode, setScreenMode] = useState<string>("default");

    return (
        <div className="true-screen">
            <SlimeScreen screenMode={screenMode}/>
            {showInfo && <InfoScreen /> }
            <div className="slime-button-container">
                <img className="slime-button slime-button--mobile" src='/assets/mobile.svg' onClick={() => setScreenMode("mobile")}/>
                <img className="slime-button slime-button--tablet" src='/assets/tablet.svg' onClick={() => setScreenMode("tablet")}/>
                <img className="slime-button slime-button--desktop" src='/assets/desktop.svg' onClick={() => setScreenMode("desktop")}/>
            </div>
            <img className="info-button" src='/assets/info.svg' onClick={() => setShowInfo(!showInfo)}/>
        </div>
    )
}

export default TrueScreen;