import style from "./SetupLayout.module.css";
import { FieldValues, FormProvider, SubmitHandler } from "react-hook-form";
import { SetupLayoutProps } from "../../../models/types/props";
import { DateDefaultJSON, SETUP_ID } from "../../../models/constants";
import { MovieFilters } from "../../../models/types/movie";
import Session from "../../../utils/sessionStorage";
import { SessionKey } from "../../../models/enums/session";
import { updatePlayer } from "../../../models/initialization/player";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import { useSocketContext } from "../../../context/SocketContext";
import { SetupOption } from "../../../models/enums/landing";
import useFirstRoundMovies from "../../../api/hooks/useFirstRoundMovies";
import { useNavigate } from "react-router-dom";
import path from "../../../router/routePath.json";
import { extractRoomId } from "../../../utils/format";

const SetupLayout = <TInput extends FieldValues>({
    setupOption,
    roomLink,
    playerRole,
    children,
    methods,
}: SetupLayoutProps<TInput>) => {
    const { handleSubmit } = methods;
    const { setRounds, setCurrentPlayer } = useGamePlayContext();
    const { handlePlayerJoinRoom, handleGameFilters } = useSocketContext();
    const { firstRoundMovies } = useFirstRoundMovies();
    const navigate = useNavigate();

    const onSubmitForm: SubmitHandler<TInput> = (data: TInput) => {
        const { year, genre, language, name, avater, rounds } = data;
        const { player, option } = setupOption;

        const updatedPlayer = updatePlayer(player, name, avater);
        if (updatedPlayer) {
            if (option === SetupOption.SINGLE) {
                Session.set(SessionKey.CURRENT_PLAYER, updatedPlayer);
                setCurrentPlayer(updatedPlayer);
            } else if (option === SetupOption.MULTI) {
                const roomId = extractRoomId(roomLink)
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
            Session.set(SessionKey.FILTERS, filters);
            firstRoundMovies(filters);

            setRounds(parseInt(rounds));
            Session.set(SessionKey.ROUNDS, rounds);
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
