import { useState } from "react";
import SlimeScreen from '../slimeScreen/SlimeScreen';
import InfoScreen from "../infoScreen/InfoScreen";
import './TrueScreen.scss';

const TrueScreen = () => {

    const [showInfo, setShowInfo] = useState<boolean>(false);

    return (
        <div className="true-screen">
            <SlimeScreen />
            {showInfo && <InfoScreen /> }
            <img className="info-button" src='/assets/info.svg' onClick={() => setShowInfo(!showInfo)}/>
        </div>
    )
}

export default TrueScreen;