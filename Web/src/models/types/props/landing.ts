import { SetupOption } from "../setup";
import { PlayerRole } from "../union";

export type LandingProps = {
    setSetupOption: React.Dispatch<React.SetStateAction<SetupOption>>;
};

export type SetupProps = {
    playerRole: PlayerRole;
    setupOption: SetupOption;
};

export type LoadingPageProps = {
    canStart: boolean;
};
