import { ModOption } from "../../enums/landing";
import { Player } from "../player";
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
    rivalPlayers: Player[];
    playerRole?: PlayerRole;
    onClicked: () => void;
    isLoading: boolean;
    gameMod: ModOption;
};