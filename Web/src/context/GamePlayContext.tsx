import { createContext, useContext, useState } from "react";
import { SessionKey } from "../models/enums/session";
import Session from "../utils/storage/sessionStorage";
import { Game } from "../models/types/game";
import { Player } from "../models/types/player";
import { Card } from "../models/types/card";
import { initGameCardsList } from "../models/initialization/card";
import { RoundAction } from "../models/types/union";
import { Movie } from "../models/types/movie";

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
    playerFinishRound: boolean | undefined;
    setPlayerFinishRound: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    isRoundFinished: boolean | undefined;
    setIsRoundFinished: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    gameOver: boolean;
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
    previewMovies: Movie[];
    setPreviewMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    resetGameContext: () => void;
    clearGameContext: () => void;
    refreshGameContext: () => void;
    setRoundNumber: (action: RoundAction) => void;
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
    playerFinishRound: false,
    setPlayerFinishRound: () => {},
    isRoundFinished: false,
    setIsRoundFinished: () => {},
    gameOver: false,
    setGameOver: () => {},
    previewMovies: [],
    setPreviewMovies: () => {},
    resetGameContext: () => {},
    clearGameContext: () => {},
    refreshGameContext: () => {},
    setRoundNumber: () => {},
});

export const useGamePlayContext = () => useContext(GamePlayContext);

export const GamePlayContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [game, setGame] = useState<Game | undefined>();
    const [gameCards, setGameCards] = useState<Card[]>(initGameCardsList());
    const [correctOrder, setCorrectOrder] = useState<Card[]>([]);
    const [fetchLoading, setFetchLoading] = useState<boolean>(false);
    const [currentPlayer, setCurrentPlayer] = useState<Player | undefined>();
    const [playerFinishRound, setPlayerFinishRound] = useState<boolean | undefined>();
    const [isRoundFinished, setIsRoundFinished] = useState<boolean | undefined>();
    const [gameOver, setGameOver] = useState<boolean>(false);
    // const [leaderBoard, setLeaderBoard] = useState<LeaderBoard | undefined>();
    const [previewMovies, setPreviewMovies] = useState<Movie[]>([]);

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
    };
    setStateFromSession();

    const setRoundNumber = (action: RoundAction) => {
        setGame((prev) => {
            if (prev) {
                const currentRound: number =
                    action === "reset"
                        ? 1
                        : action === "increase"
                          ? prev.currentRound + 1
                          : prev.currentRound - 1;

                const game = { ...prev, currentRound };
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
        setPlayerFinishRound(false);
        setIsRoundFinished(false);
        setGameOver(false);
    };

    const resetGameContext = () => {
        resetRoundContextState();
        setRoundNumber("reset");
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
        Session.remove(SessionKey.BACKUP);
        Session.remove(SessionKey.GAME);
        Session.remove(SessionKey.CURRENT_PLAYER);
        setGameCards(initGameCardsList());
        setGameOver(false);
        setCurrentPlayer(undefined);
        setGame(undefined);
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
                playerFinishRound,
                setPlayerFinishRound,
                isRoundFinished,
                setIsRoundFinished,
                gameOver,
                setGameOver,
                previewMovies,
                setPreviewMovies,
                resetGameContext,
                clearGameContext,
                refreshGameContext,
                setRoundNumber,
            }}
        >
            {children}
        </GamePlayContext.Provider>
    );
};
