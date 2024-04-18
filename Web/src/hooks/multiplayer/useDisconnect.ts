import { useEffect } from "react";
import useGameActions from "../gameplay/useGameActions";
import { Game } from "../../models/types/game";
import Session from "../../utils/storage/sessionStorage";
import { SessionKey } from "../../models/enums/session";
import { useGamePlayContext } from "../../context/GamePlayContext";

const useDisconnect = () => {
    const { game } = useGamePlayContext();
    const { handleQuit } = useGameActions(() => {});

    useEffect(() => {
        if (game && game.isGameStart) {
            handleQuit();
        } else {
            const sessionGame: Game | undefined = Session.get(SessionKey.GAME);
            if (sessionGame && sessionGame.isGameStart) {
                handleQuit();
            }
        }
    }, []);
};

export default useDisconnect;
