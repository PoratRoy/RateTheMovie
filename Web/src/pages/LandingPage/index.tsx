import React, { useEffect, useState } from "react";
import LandingLayout from "../../components/layout/LandingLayout";
import { SetupOption } from "../../models/enums/landing";
import Landing from "../../components/landing/Landing";
import Setup from "../../components/landing/Setup";
import Session from "../../utils/sessionStorage";
import { SessionKey } from "../../models/enums/session";
import { SetupLayoutOption } from "../../models/types/setup";

const LandingPage: React.FC = () => {
    const [setupOption, setSetupOption] = useState<SetupLayoutOption>({ option: SetupOption.NONE });

    const [roomLink, setRoomLink] = useState<string>("");

    useEffect(() => {
        if (setupOption === undefined) return;

        setTimeout(() => {
            const sessionRoom = Session.get(SessionKey.ROOM);
            setRoomLink(`http://localhost:5173/guest/${sessionRoom || ""}`);
        }, 50);
    }, [setupOption]);

    return (
        <LandingLayout setupOption={setupOption}>
            <Setup roomLink={roomLink} playerRole="host" setupOption={setupOption} />
            <Landing setSetupOption={setSetupOption} />
        </LandingLayout>
    );
};

export default LandingPage;
