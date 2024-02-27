import style from "./SetupLayout.module.css";
import { FieldValues, FormProvider, SubmitHandler } from "react-hook-form";
import Session from "../../../utils/sessionStorage";
import { SessionKey } from "../../../models/enums/session";
import { updatePlayer } from "../../../models/initialization/player";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import { useSocketContext } from "../../../context/SocketContext";
import useFirstRoundMovies from "../../../api/hooks/useFirstRoundMovies";
import { useNavigate } from "react-router-dom";
import path from "../../../router/routePath.json";
import { DateDefaultJSON, SETUP_ID, SinglePlayerRoom } from "../../../models/constant";
import { SetupLayoutProps } from "../../../models/types/props/layout";
import { MovieFilters } from "../../../models/types/filter";
import { Game } from "../../../models/types/game";
import { Player } from "../../../models/types/player";
import useMod from "../../../hooks/gameplay/useMod";

const SetupLayout = <TInput extends FieldValues>({
    setupOption,
    playerRole,
    children,
    methods,
}: SetupLayoutProps<TInput>) => {
    const { handleSubmit } = methods;
    const { setCurrentPlayer, setGame } = useGamePlayContext();
    const { handlePlayerJoinRoom, handleGame } = useSocketContext();
    const { firstRoundMovies } = useFirstRoundMovies();
    const { isMulti, isSingle } = useMod();
    const navigate = useNavigate();

    const onSubmitForm: SubmitHandler<TInput> = (data: TInput) => {
        const { year, genre, language, name, avater, rounds } = data;
        const { player, mod, roomId } = setupOption;

        const updatedPlayer = updatePlayer(player, name, avater);
        if (updatedPlayer) {
            if (isSingle(mod)) {
                Session.set(SessionKey.CURRENT_PLAYER, updatedPlayer);
                setCurrentPlayer(updatedPlayer);
            } else if (isMulti(mod) && roomId) {
                handlePlayerJoinRoom(roomId, updatedPlayer, (player: Player) => {
                    if (player) {
                        Session.set(SessionKey.CURRENT_PLAYER, player);
                        setCurrentPlayer(player);
                    }
                });
            }
        }

        if (playerRole === "host") {
            const filters: MovieFilters = {
                year: year ? JSON.parse(year) : DateDefaultJSON,
                genre: genre ? JSON.parse(genre) : [],
                language: language ? JSON.parse(language) : "",
            };

            const game: Game = {
                rounds: rounds ? parseInt(rounds) : 0,
                roomId: roomId || SinglePlayerRoom,
                filters,
                currentRound: 1,
                mod,
            };
            setGame(game);
            Session.set(SessionKey.GAME, game);
            if (isMulti(mod)) {
                handleGame(game);
            }
            firstRoundMovies(filters);
        }
        //TODO: crate game also for player role?
        navigate(path.game);
    };

    return (
        <FormProvider {...methods}>
            <form
                id={SETUP_ID}
                className={style.setupContainer}
                onSubmit={handleSubmit(onSubmitForm)}
                // TODOCSS: refactor it
                style={
                    playerRole === "host"
                        ? { display: "none", opacity: 0 }
                        : {
                              opacity: 1,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                          }
                }
                noValidate
            >
                {children}
            </form>
        </FormProvider>
    );
};

export default SetupLayout;
