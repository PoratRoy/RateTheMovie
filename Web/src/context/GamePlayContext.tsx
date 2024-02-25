import { createContext, useContext, useState } from "react";
import { SessionKey } from "../models/enums/session";
import Session from "../utils/sessionStorage";
import { FinishAnimation, Game } from "../models/types/game";
import { initFinishAnimation } from "../models/initialization/context";
import { Player } from "../models/types/player";
import { Card } from "../models/types/card";
import { Movie } from "../models/types/movie";
import { initGameCardsList } from "../models/initialization/card";

export const GamePlayContext = createContext<{
    game: Game | undefined;
    setGame: React.Dispatch<React.SetStateAction<Game | undefined>>;
    gameCards: Card[];
    setGameCards: React.Dispatch<React.SetStateAction<Card[]>>;
    fetchLoading: boolean;
    setFetchLoading: React.Dispatch<React.SetStateAction<boolean>>;
    currentPlayer: Player | undefined;
    setCurrentPlayer: React.Dispatch<React.SetStateAction<Player | undefined>>;
    finish: boolean;
    setFinish: React.Dispatch<React.SetStateAction<boolean>>;
    clearGameContext: () => void;
    refreshGameContext: () => void;
    finishAnimation: FinishAnimation;
    setCorrectPack: (showCorrectPack: Movie[]) => void;
    setPlayAgainBtn: () => void;
    setIncreaseScore: () => void;
    setRemovePosition: () => void;
    rounds: number;
    setRounds: React.Dispatch<React.SetStateAction<number>>;
}>({
    game: undefined,
    setGame: () => {},
    gameCards: [],
    setGameCards: () => {},
    fetchLoading: false,
    setFetchLoading: () => {},
    currentPlayer: undefined,
    setCurrentPlayer: () => {},
    finish: false,
    setFinish: () => {},
    clearGameContext: () => {},
    refreshGameContext: () => {},
    finishAnimation: initFinishAnimation,
    setCorrectPack: () => {},
    setPlayAgainBtn: () => {},
    setIncreaseScore: () => {},
    setRemovePosition: () => {},
    rounds: 0,
    setRounds: () => {},
});

export const useGamePlayContext = () => useContext(GamePlayContext);

export const GamePlayContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [game, setGame] = useState<Game | undefined>();
    const [gameCards, setGameCards] = useState<Card[]>(initGameCardsList());
    const [fetchLoading, setFetchLoading] = useState<boolean>(false);
    const [rounds, setRounds] = useState<number>(0);
    const [currentPlayer, setCurrentPlayer] = useState<Player | undefined>();
    const [finish, setFinish] = useState<boolean>(false);
    const [finishAnimation, setFinishAnimation] = useState<FinishAnimation>(initFinishAnimation);

    //TODO: extract to a hook
    const setStateFromSession = () => {
        if (!rounds) {
            const sessionRounds: number | undefined = Session.get(SessionKey.ROUNDS);
            if (sessionRounds) setRounds(sessionRounds);
        }
        if (!currentPlayer) {
            const sessionCurrentPlayer: Player | undefined = Session.get(SessionKey.CURRENT_PLAYER);
            if (sessionCurrentPlayer) setCurrentPlayer(sessionCurrentPlayer);
        }
    };
    setStateFromSession();

    const setCorrectPack = (showCorrectPack: Movie[]) =>
        setFinishAnimation((prev) => ({ ...prev, showCorrectPack }));

    const setPlayAgainBtn = () => {
        if (!finishAnimation.playAgainBtn) {
            setFinishAnimation((prev) => ({ ...prev, playAgainBtn: true }));
        }
    };

    const setIncreaseScore = () => setFinishAnimation((prev) => ({ ...prev, increaseScore: true }));

    const setRemovePosition = () =>
        setFinishAnimation((prev) => ({ ...prev, removePosition: true }));

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
        Session.remove(SessionKey.FILTERS);
        Session.remove(SessionKey.BACKUP);
        Session.remove(SessionKey.ROOM);
        Session.remove(SessionKey.ROUNDS);
        Session.remove(SessionKey.CURRENT_PLAYER);
        setFinishAnimation(initFinishAnimation);
        setGameCards(initGameCardsList());
        setFetchLoading(false);
        setFinish(false);
        setCurrentPlayer(undefined);
    };
    return (
        <GamePlayContext.Provider
            value={{
                game,
                setGame,
                gameCards,
                setGameCards,
                fetchLoading,
                setFetchLoading,
                currentPlayer,
                setCurrentPlayer,
                finish,
                setFinish,
                clearGameContext,
                refreshGameContext,
                finishAnimation,
                setCorrectPack,
                setPlayAgainBtn,
                setIncreaseScore,
                setRemovePosition,
                rounds,//to remove
                setRounds,
            }}
        >
            {children}
        </GamePlayContext.Provider>
    );
};
