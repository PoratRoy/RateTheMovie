import React, { useState } from "react";
import LandingLayout from "../layout/LandingLayout";
import Landing from "../../components/landing/Landing";
import Setup from "../../components/landing/Setup";
import { SetupOption } from "../../models/types/setup";
import { defaultSetupOption } from "../../models/initialization/setup";

const LandingPage: React.FC = () => {
    //TODO: can be in the URL instade of state
    const [setupOption, setSetupOption] = useState<SetupOption>(defaultSetupOption);

    return (
        <LandingLayout setupOption={setupOption} setSetupOption={setSetupOption}>
            <Setup playerRole="host" setupOption={setupOption} />
            <Landing setSetupOption={setSetupOption} />
        </LandingLayout>
    );
};

export default LandingPage;
