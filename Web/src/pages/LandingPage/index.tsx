import React, { useState } from "react";
import LandingLayout from "../layout/LandingLayout";
import { ModOption } from "../../models/enums/landing";
import Landing from "../../components/landing/Landing";
import Setup from "../../components/landing/Setup";
import { SetupOption } from "../../models/types/setup";

const LandingPage: React.FC = () => {
    const [setupOption, setSetupOption] = useState<SetupOption>({ mod: ModOption.NONE });

    return (
        <LandingLayout setupOption={setupOption} setSetupOption={setSetupOption}>
            <Setup playerRole="host" setupOption={setupOption} />
            <Landing setSetupOption={setSetupOption} />
        </LandingLayout>
    );
};

export default LandingPage;
