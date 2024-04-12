import { Game } from "../game";
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
    rivalPlayers: Player[] | undefined;
    currentPlayer: Player | undefined;
    onClicked: () => void;
    isLoading: boolean;
    game: Game | undefined;
};

export type MultiLoadingProps = LoadingPageProps;

export type SingleLoadingProps = {};
