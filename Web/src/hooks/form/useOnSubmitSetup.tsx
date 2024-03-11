import { FieldValues, SubmitHandler } from "react-hook-form";
import { updatePlayer } from "../../models/initialization/player";
import Session from "../../utils/storage/sessionStorage";
import { SessionKey } from "../../models/enums/session";
import { Player } from "../../models/types/player";
import { MovieFilters } from "../../models/types/filter";
import { Game } from "../../models/types/game";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { useSocketContext } from "../../context/SocketContext";
import useFirstRoundMovies from "../../api/hooks/useFirstRoundMovies";
import useMod from "../gameplay/useMod";
import { useNavigate } from "react-router-dom";
import { SetupOption } from "../../models/types/setup";
import { PlayerRole } from "../../models/types/union";
import path from "../../router/routePath.json";
import { initFilters, initGame } from "../../utils/init";

const useOnSubmitSetup = <TInput extends FieldValues>(
    setupOption: SetupOption,
    playerRole: PlayerRole,
) => {
    const { setCurrentPlayer, setGame } = useGamePlayContext();
    const { handlePlayerJoinRoom, handleGame } = useSocketContext();
    const { firstRoundMovies } = useFirstRoundMovies();
    const { isMulti, isSingle } = useMod();
    const navigate = useNavigate();

    const onSubmitForm: SubmitHandler<TInput> = (data: TInput) => {
        const { year, genre, language, name, avatar, rounds } = data;
        const { player, mod, roomId } = setupOption;

        const setPlayer = (player: Player) => {
            Session.set(SessionKey.CURRENT_PLAYER, player);
            setCurrentPlayer(player);
        };

        if (player) {
            const updatedPlayer = updatePlayer(player, name, avatar);
            if (isSingle(mod)) {
                setPlayer(updatedPlayer);
            } else if (isMulti(mod) && roomId) {
                handlePlayerJoinRoom(roomId, updatedPlayer, (player: Player, game: Game | undefined) => {
                    setPlayer(player);
                    if (game && playerRole === "player"){
                        setGame(game);
                        Session.set(SessionKey.GAME, game);
                    }
                });
            }
        }

        if (playerRole === "host") {
            const filters: MovieFilters = initFilters(year, genre, language);
            const game: Game = initGame(rounds, roomId, filters, mod);
            if (isMulti(mod)) {
                handleGame(game);
            }
            setGame(game);
            Session.set(SessionKey.GAME, game);

            firstRoundMovies(filters, mod);
        }
        navigate(path.game);
    };

    return { onSubmitForm };
};

export default useOnSubmitSetup;
