import React, { useState } from "react";
import LandingLayout from "../../components/layout/LandingLayout";
import Filter from "../../components/landing/Filter";
import Multiplayer from "../../components/landing/Multiplayer";
import { LandingOpt } from "../../models/enums/landing";
import Landing from "../../components/landing/Landing";

const LandingPage: React.FC = () => {
    const [layoutOption, setLayoutOption] = useState<LandingOpt>(LandingOpt.LANDING);

    return (
        <LandingLayout layoutOption={layoutOption}>
            <Filter />
            <Multiplayer
                layoutOption={layoutOption}
                setLayoutOption={setLayoutOption}
                playerRole="host"
            />
            <Landing setLayoutOption={setLayoutOption} />
        </LandingLayout>
    );
};

export default LandingPage;
