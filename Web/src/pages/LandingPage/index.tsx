import React, { useState } from "react";
import LandingLayout from "../../components/layout/LandingLayout";
import Filter from "../../components/landing/Filter";
import Multiplayer from "../../components/landing/Multiplayer";
import { LandingOpt } from "../../models/enums/landing";
import Landing from "../../components/landing/Landing";

const LandingPage: React.FC = () => {
    const [layoutOption, setLayoutOption] = useState<LandingOpt>(LandingOpt.LANDING);
    const [roomLink, setRoomLink] = useState<string>("");

    return (
        <LandingLayout layoutOption={layoutOption}>
            <Filter />
            <Multiplayer setLayoutOption={setLayoutOption} roomLink={roomLink} />
            <Landing setLayoutOption={setLayoutOption} setRoomLink={setRoomLink}/>
        </LandingLayout>
    );
};

export default LandingPage;
