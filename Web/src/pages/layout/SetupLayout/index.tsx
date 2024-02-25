import style from "./SetupLayout.module.css";
import { FieldValues, FormProvider, SubmitHandler } from "react-hook-form";
import Session from "../../../utils/sessionStorage";
import { SessionKey } from "../../../models/enums/session";
import { updatePlayer } from "../../../models/initialization/player";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import { useSocketContext } from "../../../context/SocketContext";
import { SetupOption } from "../../../models/enums/landing";
import useFirstRoundMovies from "../../../api/hooks/useFirstRoundMovies";
import { useNavigate } from "react-router-dom";
import path from "../../../router/routePath.json";
import { DateDefaultJSON, SETUP_ID, SinglePlayerRoom } from "../../../models/constant";
import { SetupLayoutProps } from "../../../models/types/props/layout";
import { MovieFilters } from "../../../models/types/filter";
import { Game } from "../../../models/types/game";

const SetupLayout = <TInput extends FieldValues>({
    setupOption,
    playerRole,
    children,
    methods,
}: SetupLayoutProps<TInput>) => {
    const { handleSubmit } = methods;
    const { setCurrentPlayer, setGame } = useGamePlayContext();
    const { handlePlayerJoinRoom, handleGameFilters } = useSocketContext();
    const { firstRoundMovies } = useFirstRoundMovies();
    const navigate = useNavigate();

    const onSubmitForm: SubmitHandler<TInput> = (data: TInput) => {
        const { year, genre, language, name, avater, rounds } = data;
        const { player, option, roomId } = setupOption;

        const updatedPlayer = updatePlayer(player, name, avater);
        if (updatedPlayer) {
            if (option === SetupOption.SINGLE) {
                Session.set(SessionKey.CURRENT_PLAYER, updatedPlayer);
                setCurrentPlayer(updatedPlayer);
            } else if (option === SetupOption.MULTI && roomId) {
                handlePlayerJoinRoom(roomId, updatedPlayer, (players) => {
                    //TODO: players[0] ?
                    Session.set(SessionKey.CURRENT_PLAYER, players[0]);
                    setCurrentPlayer(players[0]);
                });
            }
        }

        if (playerRole === "host") {
            const filters: MovieFilters = {
                year: year ? JSON.parse(year) : DateDefaultJSON,
                genre: genre ? JSON.parse(genre) : [],
                language: language ? JSON.parse(language) : "",
            };
            if (option === SetupOption.MULTI) {
                handleGameFilters(filters);
            }
            firstRoundMovies(filters);

            const game: Game = {
                rounds: rounds ? parseInt(rounds) : 0,
                roomId: roomId || SinglePlayerRoom,
                filters,
                currentRound: 1,
            };
            setGame(game);
            Session.set(SessionKey.GAME, game);
        }
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
