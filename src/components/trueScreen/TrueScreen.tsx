import { useState } from "react";
import SlimeScreen from '../slimeScreen/SlimeScreen';
import InfoScreen from "../infoScreen/InfoScreen";
import './TrueScreen.scss';
import MobileIcon from '../../../assets/mobile.svg?react';
import TabletIcon from '../../../assets/tablet.svg?react';
import DesktopIcon from '../../../assets/desktop.svg?react';
import InfoIcon from '../../../assets/info.svg?react';

const TrueScreen = () => {

    const [showInfo, setShowInfo] = useState<boolean>(false);
    const [screenMode, setScreenMode] = useState<string>("default");

    const hideInfo = (evt : React.MouseEvent<HTMLElement>) => {

        const clickedElement = evt.target;

        if(clickedElement instanceof HTMLElement) {

            const elementClassName = clickedElement.className;
            if(elementClassName === 'info-screen') setShowInfo(false);
        }
    }

    return (
        <div className="true-screen">
            <div className="true-screen-heading">
                <span className="true-screen-heading--title">IrregularGPT</span>
                <span className="true-screen-heading--version">v0.3.7</span>
            </div>
            <SlimeScreen screenMode={screenMode}/>
            {showInfo && <InfoScreen hideInfo={hideInfo} /> }
            <div className="slime-button-container">
                <MobileIcon className="slime-button slime-button--mobile" onClick={() => setScreenMode("mobile")}/>
                <TabletIcon className="slime-button slime-button--tablet" onClick={() => setScreenMode("tablet")}/>
                <DesktopIcon className="slime-button slime-button--desktop" onClick={() => setScreenMode("desktop")}/>
            </div>
            <InfoIcon className="info-button" onClick={() => setShowInfo(!showInfo)}/>
        </div>
    )
}

export default TrueScreen;