import { SetupLayoutOption } from "../setup";
import { PlayerRole } from "../union";

export type LandingProps = {
    setSetupOption: React.Dispatch<React.SetStateAction<SetupLayoutOption>>;
};

export type SetupProps = {
    playerRole: PlayerRole;
    setupOption: SetupLayoutOption;
};

export type LoadingPageProps = {
    isCanStart: boolean;
};
