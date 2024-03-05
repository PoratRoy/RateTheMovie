import { createContext, useContext, useState } from "react";
import { SessionKey } from "../models/enums/session";
import Session from "../utils/sessionStorage";
import { Game } from "../models/types/game";
import { Player } from "../models/types/player";
import { Card } from "../models/types/card";
import { Movie } from "../models/types/movie";
import { initGameCardsList } from "../models/initialization/card";
import { RoundAction } from "../models/types/union";
import { LeaderBoard } from "../models/types/leaderBoard";

export const GamePlayContext = createContext<{
    game: Game | undefined;
    setGame: React.Dispatch<React.SetStateAction<Game | undefined>>;
    gameCards: Card[];
    setGameCards: React.Dispatch<React.SetStateAction<Card[]>>;
    correctOrder: Movie[];
    setCorrectOrder: React.Dispatch<React.SetStateAction<Movie[]>>;
    fetchLoading: boolean;
    setFetchLoading: React.Dispatch<React.SetStateAction<boolean>>;
    currentPlayer: Player | undefined;
    setCurrentPlayer: React.Dispatch<React.SetStateAction<Player | undefined>>;
    finishRound: boolean;
    setFinishRound: React.Dispatch<React.SetStateAction<boolean>>;
    gameOver: boolean;
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
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
    finishRound: false,
    setFinishRound: () => {},
    gameOver: false,
    setGameOver: () => {},
    clearGameContext: () => {},
    refreshGameContext: () => {},
    setRoundNumber: () => {},
});

export const useGamePlayContext = () => useContext(GamePlayContext);

export const GamePlayContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [game, setGame] = useState<Game | undefined>();
    const [gameCards, setGameCards] = useState<Card[]>(initGameCardsList());
    const [correctOrder, setCorrectOrder] = useState<Movie[]>([]);
    const [fetchLoading, setFetchLoading] = useState<boolean>(false);
    const [currentPlayer, setCurrentPlayer] = useState<Player | undefined>();
    const [finishRound, setFinishRound] = useState<boolean>(false);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [leaderBoard, setLeaderBoard] = useState<LeaderBoard | undefined>();
    const [previewMovies, setPreviewMovies] = useState<Movie[]>([]);

    //TODO: extract to a hook
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

    const refreshGameContext = () => {
        Session.remove(SessionKey.GAME_CARDS);
        setCorrectOrder([]);
        setFetchLoading(false);
        setFinishRound(false);
        setGameOver(false);
        setCurrentPlayer((player) => {
            return player ? { ...player, electedCards: { order: [] } } : player;
        });
    };

    const clearGameContext = () => {
        Session.remove(SessionKey.GAME_CARDS);
        Session.remove(SessionKey.BACKUP);
        Session.remove(SessionKey.GAME);
        Session.remove(SessionKey.CURRENT_PLAYER);
        setGameCards(initGameCardsList());
        setCorrectOrder([]);
        setFetchLoading(false);
        setFinishRound(false);
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
                finishRound,
                setFinishRound,
                gameOver,
                setGameOver,
                clearGameContext,
                refreshGameContext,
                setRoundNumber,
            }}
        >
            {children}
        </GamePlayContext.Provider>
    );
};
