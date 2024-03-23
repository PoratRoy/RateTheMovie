import { createContext, useContext, useState } from "react";
import { SessionKey } from "../models/enums/session";
import Session from "../utils/storage/sessionStorage";
import { Game } from "../models/types/game";
import { Player } from "../models/types/player";
import { Card } from "../models/types/card";
import { initGameCardsList } from "../models/initialization/card";
import { Movie } from "../models/types/movie";
import { SHUFFLE_ATTEMPT } from "../models/constant";
import { RoundAction } from "../models/types/union";

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
    previewMovies: Movie[];
    setPreviewMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    backupMovies: Movie[][];
    setBackupMovies: React.Dispatch<React.SetStateAction<Movie[][]>>;
    resetGameContext: () => void;
    clearGameContext: () => void;
    refreshGameContext: () => void;
    setRoundNumber: (action: RoundAction, round?: number) => number;
    setShuffle: (action: RoundAction) => void;
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
    setPreviewMovies: () => {},
    backupMovies: [],
    setBackupMovies: () => {},
    resetGameContext: () => {},
    clearGameContext: () => {},
    refreshGameContext: () => {},
    setRoundNumber: () => 1,
    setShuffle: () => {},
});

export const useGamePlayContext = () => useContext(GamePlayContext);

export const GamePlayContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [game, setGame] = useState<Game | undefined>();
    const [gameCards, setGameCards] = useState<Card[]>(initGameCardsList());
    const [correctOrder, setCorrectOrder] = useState<Card[]>([]);
    const [fetchLoading, setFetchLoading] = useState<boolean>(false);
    const [currentPlayer, setCurrentPlayer] = useState<Player | undefined>();
    // const [leaderBoard, setLeaderBoard] = useState<LeaderBoard | undefined>();
    const [previewMovies, setPreviewMovies] = useState<Movie[]>([]);

    const [backupMovies, setBackupMovies] = useState<Movie[][]>([]);

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
        if (!backupMovies) {
            const sessionBackupMovies: Movie[][] = Session.get(SessionKey.BACKUP);
            if (sessionBackupMovies) setBackupMovies(sessionBackupMovies);
        }
    };
    setStateFromSession();

    const setRoundNumber = (action: RoundAction, round?: number) => {
        let currentRound = 1;
        if (round) currentRound = action === "increase" ? round + 1 : round - 1;

        setGame((prev) => {
            if (prev) {
                const game = {
                    ...prev,
                    currentRound,
                };
                Session.set(SessionKey.GAME, game);
                return game;
            }
            return prev;
        });
        return currentRound;
    };

    const setShuffle = (action: RoundAction) => {
        setGame((prev) => {
            if (prev) {
                const game = {
                    ...prev,
                    shuffleAttempt:
                        action === "reset"
                            ? SHUFFLE_ATTEMPT
                            : action === "decrease"
                              ? prev.shuffleAttempt - 1
                              : prev.shuffleAttempt + 1,
                };
                Session.set(SessionKey.GAME, game);
                return game;
            }
            return prev;
        });
    };

    const resetRoundContextState = () => {
        Session.remove(SessionKey.GAME_CARDS);
        setCorrectOrder([]);
        setFetchLoading(false);
    };

    const resetGameContext = () => {
        resetRoundContextState();
        setRoundNumber("reset");
        setShuffle("reset");
        setBackupMovies([]);
        setCurrentPlayer((player) => {
            return player ? { ...player, electedCards: { order: [] }, score: 0 } : player;
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
        Session.remove(SessionKey.BACKUP);
        setGameCards(initGameCardsList());
        setCurrentPlayer(undefined);
        setGame(undefined);
        setBackupMovies([]);
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
                setPreviewMovies,
                backupMovies,
                setBackupMovies,
                resetGameContext,
                clearGameContext,
                refreshGameContext,
                setRoundNumber,
                setShuffle,
            }}
        >
            {children}
        </GamePlayContext.Provider>
    );
};
