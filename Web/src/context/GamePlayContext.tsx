import { createContext, useContext, useState } from "react";
import { SessionKey } from "../models/enums/session";
import Session from "../utils/storage/sessionStorage";
import { Game, SetGameStateFunction } from "../models/types/game";
import { Player } from "../models/types/player";
import { Card } from "../models/types/card";
import { initGameCardsList } from "../models/initialization/card";
import { Movie } from "../models/types/movie";
import { RoundAction } from "../models/types/union";
import { PACK_CARDS_NUM } from "../models/constant";

export const GamePlayContext = createContext<{
    game: Game | undefined;
    setGame: React.Dispatch<React.SetStateAction<Game | undefined>>;
    gameCards: Card[];
    setGameCards: React.Dispatch<React.SetStateAction<Card[]>>;
    correctOrder: Card[];
    setCorrectOrder: React.Dispatch<React.SetStateAction<Card[]>>;
    fetchLoading: boolean;
    setFetchLoading: React.Dispatch<React.SetStateAction<boolean>>;
    currentPlayer: Player | undefined;
    setCurrentPlayer: React.Dispatch<React.SetStateAction<Player | undefined>>;
    previewMovies: Movie[] | undefined;
    roundsMovies: Movie[][] | undefined;
    setRoundsMovies: React.Dispatch<React.SetStateAction<Movie[][] | undefined>>;
    activateTimer: boolean;
    setActivateTimer: React.Dispatch<React.SetStateAction<boolean>>;
    isPreview: boolean;
    setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
    resetGameContext: () => void;
    clearGameContext: () => void;
    refreshGameContext: () => void;
    setRoundNumber: (action: RoundAction, round?: number) => number;
    setIsGameStart: (isGameStart: boolean) => void;
    setIsRoundStart: (isRoundStart: boolean) => void;
    setIsPlayerFinishRound: (isPlayerFinishRound: boolean) => void;
    setIsRoundFinished: (isRoundFinished: boolean) => void;
    setIsGameOver: (isGameOver: boolean) => void;
    setIsRefeshed: (isRefreshed: boolean) => void;
    insertMoviesToPreview: () => void;
}>({
    game: undefined,
    setGame: () => {},
    gameCards: [],
    setGameCards: () => {},
    correctOrder: [],
    setCorrectOrder: () => {},
    fetchLoading: false,
    setFetchLoading: () => {},
    currentPlayer: undefined,
    setCurrentPlayer: () => {},
    previewMovies: [],
    roundsMovies: [],
    setRoundsMovies: () => {},
    activateTimer: true,
    setActivateTimer: () => {},
    isPreview: false,
    setIsPreview: () => {},
    resetGameContext: () => {},
    clearGameContext: () => {},
    refreshGameContext: () => {},
    setRoundNumber: () => 1,
    setIsGameStart: () => {},
    setIsRoundStart: () => {},
    setIsPlayerFinishRound: () => {},
    setIsRoundFinished: () => {},
    setIsGameOver: () => {},
    setIsRefeshed: () => {},
    insertMoviesToPreview: () => {},
});

export const useGamePlayContext = () => useContext(GamePlayContext);

export const GamePlayContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [game, setGame] = useState<Game | undefined>();
    const [gameCards, setGameCards] = useState<Card[]>(initGameCardsList());
    const [correctOrder, setCorrectOrder] = useState<Card[]>([]);
    const [fetchLoading, setFetchLoading] = useState<boolean>(false);
    const [currentPlayer, setCurrentPlayer] = useState<Player | undefined>();
    // const [leaderBoard, setLeaderBoard] = useState<LeaderBoard | undefined>();
    const [previewMovies, setPreviewMovies] = useState<Movie[] | undefined>(undefined);

    const [roundsMovies, setRoundsMovies] = useState<Movie[][] | undefined>(undefined);

    const [activateTimer, setActivateTimer] = useState<boolean>(false);
    const [isPreview, setIsPreview] = useState<boolean>(false);

    //TODO: extract to a hook
    //TODO: put as useCallBack
    const setStateFromSession = () => {
        if (!game) {
            const sessionGame: Game | undefined = Session.get(SessionKey.GAME);
            if (sessionGame) setGame(sessionGame);
        }
        if (!currentPlayer) {
            const sessionCurrentPlayer: Player | undefined = Session.get(SessionKey.CURRENT_PLAYER);
            if (sessionCurrentPlayer) setCurrentPlayer(sessionCurrentPlayer);
        }
        if (!roundsMovies) {
            const sessionRoundsMovies: Movie[][] | undefined = Session.get(
                SessionKey.ROUNDS_MOVIES,
            );
            if (sessionRoundsMovies) setRoundsMovies(sessionRoundsMovies);
        }
        if (!previewMovies) {
            if (game && roundsMovies) {
                const movies: Movie[] = [];
                for (let i = 0; i < game.currentRound; i++) {
                    movies.push(...roundsMovies[i]);
                }
                setPreviewMovies(movies);
            }
        }
    };
    setStateFromSession();

    const setRoundNumber = (action: RoundAction, round?: number) => {
        let currentRound = 1;
        if (round) currentRound = action === "increase" ? round + 1 : round - 1;
        createSetGameState("currentRound")(currentRound);
        return currentRound;
    };

    const setIsGameStart = (isGameStart: boolean) => {
        createSetGameState("isGameStart")(isGameStart);
    };

    const setIsRoundStart = (isRoundStart: boolean) => {
        createSetGameState("isRoundStart")(isRoundStart);
    };

    const setIsPlayerFinishRound = (isPlayerFinishRound: boolean) => {
        createSetGameState("isPlayerFinishRound")(isPlayerFinishRound);
    };

    const setIsRoundFinished = (isRoundFinished: boolean) => {
        createSetGameState("isRoundFinished")(isRoundFinished);
    };

    const setIsGameOver = (isGameOver: boolean) => {
        createSetGameState("isGameOver")(isGameOver);
    };

    const setIsRefeshed = (isRefreshed: boolean) => {
        createSetGameState("isRefreshed")(isRefreshed);
    };

    const setPlayerToDefault = () => {
        setCurrentPlayer((player) => {
            if (!player) return player;
            const currentPlayer: Player = {
                ...player,
                electedCards: { order: [] },
                connection: undefined,
                score: 0,
            };
            Session.set(SessionKey.CURRENT_PLAYER, currentPlayer);
            return currentPlayer;
        });
    };

    const createSetGameState = <K extends keyof Game>(key: K): SetGameStateFunction<K> => {
        return (value) => {
            setGame((prev) => {
                if (!prev) return prev;
                const game = { ...prev, [key]: value };
                Session.set(SessionKey.GAME, game);
                return game;
            });
        };
    };

    const insertMoviesToPreview = () => {
        if (roundsMovies && game) {
            const numberOfMovies = game.currentRound * PACK_CARDS_NUM;
            const movies = roundsMovies[game.currentRound - 1];
            setPreviewMovies((prev) => {
                if (!prev) return prev;
                const preview = [...prev, ...movies];
                return preview.length === numberOfMovies ? preview : prev;
            });
        }
    };

    const resetRoundContextState = () => {
        Session.remove(SessionKey.ROUND_TIMER);
        Session.remove(SessionKey.MODAL_TIMER);
        setCorrectOrder([]);
        setFetchLoading(false);
    };

    const resetGameContext = () => {
        resetRoundContextState();
        setRoundNumber("reset");
        setRoundsMovies([]);
        setPlayerToDefault();
        setGame((prev) => {
            if (!prev) return prev;
            return {
                ...prev,
                isGameStart: true,
                isRoundStart: false,
                isPlayerFinishRound: false,
                isRoundFinished: false,
            };
        });
    };

    const refreshGameContext = () => {
        resetRoundContextState();
        setCurrentPlayer((player) => {
            return player ? { ...player, electedCards: { order: [] } } : player;
        });
    };

    const clearGameContext = () => {
        resetRoundContextState();
        Session.remove(SessionKey.GAME);
        Session.remove(SessionKey.CURRENT_PLAYER);
        Session.remove(SessionKey.ROUNDS_MOVIES);
        setGameCards(initGameCardsList());
        setActivateTimer(false);
        setGame(undefined);
        setRoundsMovies(undefined);
        setPlayerToDefault();
    };

    return (
        <GamePlayContext.Provider
            value={{
                game,
                setGame,
                gameCards,
                setGameCards,
                correctOrder,
                setCorrectOrder,
                fetchLoading,
                setFetchLoading,
                currentPlayer,
                setCurrentPlayer,
                previewMovies,
                roundsMovies,
                setRoundsMovies,
                activateTimer,
                setActivateTimer,
                isPreview,
                setIsPreview,
                resetGameContext,
                clearGameContext,
                refreshGameContext,
                setRoundNumber,
                setIsGameStart,
                setIsRoundStart,
                setIsPlayerFinishRound,
                setIsRoundFinished,
                setIsGameOver,
                setIsRefeshed,
                insertMoviesToPreview,
            }}
        >
            {children}
        </GamePlayContext.Provider>
    );
};

// setGame((prev) => {
//     if (prev) {
//         const game = {
//             ...prev,
//             currentRound,
//         };
//         Session.set(SessionKey.GAME, game);
//         return game;
//     }
//     return prev;
// });

// setGame((prev) => {
//     if (prev) {
//         const game = {
//             ...prev,
//             isGameStart,
//         };
//         Session.set(SessionKey.GAME, game);
//         return game;
//     }
//     return prev;
// });

// setGame((prev) => {
//     if (prev) {
//         const game = {
//             ...prev,
//             isRoundStart,
//         };
//         Session.set(SessionKey.GAME, game);
//         return game;
//     }
//     return prev;
// });

// setGame((prev) => {
//     if (prev) {
//         const game = {
//             ...prev,
//             isPlayerFinishRound,
//         };
//         Session.set(SessionKey.GAME, game);
//         return game;
//     }
//     return prev;
// });

// setGame((prev) => {
//     if (prev) {
//         const game = {
//             ...prev,
//             isRoundFinished,
//         };
//         Session.set(SessionKey.GAME, game);
//         return game;
//     }
//     return prev;
// });

// setGame((prev) => {
//     if (prev) {
//         const game = {
//             ...prev,
//             isGameOver,
//         };
//         Session.set(SessionKey.GAME, game);
//         return game;
//     }
//     return prev;
// });

// setGame((prev) => {
//     if (prev) {
//         const game = {
//             ...prev,
//             isRefreshed,
//         };
//         Session.set(SessionKey.GAME, game);
//         return game;
//     }
//     return prev;
// });
