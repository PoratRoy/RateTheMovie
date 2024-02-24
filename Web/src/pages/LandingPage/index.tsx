import React, { useState } from "react";
import LandingLayout from "../../components/layout/LandingLayout";
import { SetupOption } from "../../models/enums/landing";
import Landing from "../../components/landing/Landing";
import Setup from "../../components/landing/Setup";
import { SetupLayoutOption } from "../../models/types/setup";

const LandingPage: React.FC = () => {
    const [setupOption, setSetupOption] = useState<SetupLayoutOption>({ option: SetupOption.NONE });

    return (
        <LandingLayout setupOption={setupOption}>
            <Setup playerRole="host" setupOption={setupOption} />
            <Landing setSetupOption={setSetupOption} />
        </LandingLayout>
    );
};

export default LandingPage;
