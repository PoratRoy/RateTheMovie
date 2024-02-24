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

const SetupLayout = <TInput extends FieldValues>({
    setupOption,
    roomLink,
    playerRole,
    children,
    methods,
}: SetupLayoutProps<TInput>) => {
    const { handleSubmit } = methods;
    const { setPlayers } = useGamePlayContext();
    const { handlePlayerJoinRoom } = useSocketContext();
    // const { firstRoundMovies } = useFirstRoundMovies();
    // const navigate = useNavigate();

    const onSubmitForm: SubmitHandler<TInput> = (data: TInput) => {
        const { year, genre, language, name, avater, rounds } = data;
        const { player, option } = setupOption;

        const updatedPlayer = updatePlayer(player, name, avater);
        if (updatedPlayer) {
            if (option === SetupOption.SINGEL) {
                Session.set(SessionKey.PLAYERS, [updatedPlayer]);
                setPlayers([updatedPlayer]);
            } else if (option === SetupOption.MULTI) {
                const roomId = roomLink.substring(roomLink.lastIndexOf("/") + 1);
                handlePlayerJoinRoom(roomId, updatedPlayer, (players) => {
                    Session.set(SessionKey.PLAYERS, players);
                    setPlayers(players);
                });
            }
        }

        if (playerRole === "host") {
            const filters: MovieFilters = {
                year: year ? JSON.parse(year) : DateDefaultJSON,
                genre: genre ? JSON.parse(genre) : [],
                language: language ? JSON.parse(language) : "",
            };
            Session.set(SessionKey.FILTERS, filters);

            //TODO: add rounds to the session & game context
        }
    };
    // firstRoundMovies(filters);
    // const room = Session.get(SessionKey.ROOM);
    // if(room !== SingelPlayerRoom){
    //     handleGameFilters(filters);
    // }
    // setTimeout(() => {
    //     // navigate(path.game);
    // }, 2000);

    return (
        <FormProvider {...methods}>
            <form
                id={SETUP_ID}
                className={style.setupContainer}
                onSubmit={handleSubmit(onSubmitForm)}
                // TODO: refactor it
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
