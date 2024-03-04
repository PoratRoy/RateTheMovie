import { createContext, useContext, useState } from "react";
import { SessionKey } from "../models/enums/session";
import Session from "../utils/sessionStorage";
import { FinishAnimation, Game } from "../models/types/game";
import { initFinishAnimation } from "../models/initialization/context";
import { Player } from "../models/types/player";
import { Card } from "../models/types/card";
import { Movie } from "../models/types/movie";
import { initGameCardsList } from "../models/initialization/card";
import { RoundAction } from "../models/types/union";

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
    finish: boolean;
    setFinish: React.Dispatch<React.SetStateAction<boolean>>;
    clearGameContext: () => void;
    refreshGameContext: () => void;
    finishAnimation: FinishAnimation;
    setNextRound: (nextRound?: boolean) => void;
    setIncreaseScore: () => void;
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
    finish: false,
    setFinish: () => {},
    clearGameContext: () => {},
    refreshGameContext: () => {},
    finishAnimation: initFinishAnimation,
    setNextRound: () => {},
    setIncreaseScore: () => {},
    setRoundNumber: () => {},
});

export const useGamePlayContext = () => useContext(GamePlayContext);

export const GamePlayContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [game, setGame] = useState<Game | undefined>();
    const [gameCards, setGameCards] = useState<Card[]>(initGameCardsList());
    const [correctOrder, setCorrectOrder] = useState<Movie[]>([]);
    const [fetchLoading, setFetchLoading] = useState<boolean>(false);
    const [currentPlayer, setCurrentPlayer] = useState<Player | undefined>();
    const [finish, setFinish] = useState<boolean>(false);
    const [finishAnimation, setFinishAnimation] = useState<FinishAnimation>(initFinishAnimation);

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

    const setNextRound = (nextRound: boolean = true) => {
        if (!finishAnimation.nextRound) {
            setFinishAnimation((prev) => ({ ...prev, nextRound }));
        }
    };

    const setIncreaseScore = () => setFinishAnimation((prev) => ({ ...prev, increaseScore: true }));

    const refreshGameContext = () => {
        Session.remove(SessionKey.GAME_CARDS);
        setFinishAnimation(initFinishAnimation);
        setFetchLoading(false);
        setFinish(false);
        setCurrentPlayer((player) => {
            return player ? { ...player, electedCards: { order: [] } } : player;
        });
    };

    const clearGameContext = () => {
        Session.remove(SessionKey.GAME_CARDS);
        Session.remove(SessionKey.BACKUP);
        Session.remove(SessionKey.GAME);
        Session.remove(SessionKey.CURRENT_PLAYER);
        setFinishAnimation(initFinishAnimation);
        setGameCards(initGameCardsList());
        setFetchLoading(false);
        setFinish(false);
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
                finish,
                setFinish,
                clearGameContext,
                refreshGameContext,
                finishAnimation,
                setNextRound,
                setIncreaseScore,
                setRoundNumber,
            }}
        >
            {children}
        </GamePlayContext.Provider>
    );
};
