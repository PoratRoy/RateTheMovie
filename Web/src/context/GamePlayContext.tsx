import { createContext, useContext, useState } from "react";
import { SessionKey } from "../models/enums/session";
import Session from "../utils/sessionStorage";
import { FinishAnimation } from "../models/types/game";
import { initFinishAnimation } from "../models/initialization/context";
import { Player } from "../models/types/player";
import { Card } from "../models/types/card";
import { Movie } from "../models/types/movie";
import { initGameCardsList } from "../models/initialization/card";

export const GamePlayContext = createContext<{
    gameCards: Card[];
    setGameCards: React.Dispatch<React.SetStateAction<Card[]>>;
    fetchLoading: boolean;
    setFetchLoading: React.Dispatch<React.SetStateAction<boolean>>;
    players: Player[];
    setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
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
    gameCards: [],
    setGameCards: () => {},
    fetchLoading: false,
    setFetchLoading: () => {},
    players: [],
    setPlayers: () => {},
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
    const [gameCards, setGameCards] = useState<Card[]>(initGameCardsList());
    const [fetchLoading, setFetchLoading] = useState<boolean>(false);
    const [rounds, setRounds] = useState<number>(0);
    const [players, setPlayers] = useState<Player[]>([]);
    const [finish, setFinish] = useState<boolean>(false);
    const [finishAnimation, setFinishAnimation] = useState<FinishAnimation>(initFinishAnimation);

    const setStateFromSession = () => {
        if (!players || players.length === 0) {
            const sessionPlayers = Session.get(SessionKey.PLAYERS);
            if (sessionPlayers && sessionPlayers.length > 0) {
                setPlayers(sessionPlayers);
            }
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
        setPlayers((prevPlayers) => {
            return prevPlayers.map((player) => ({
                ...player,
                electedCards: { order: [] },
            }));
        });
    };

    const clearGameContext = () => {
        Session.remove(SessionKey.GAME_CARDS);
        Session.remove(SessionKey.PLAYERS);
        Session.remove(SessionKey.FILTERS);
        Session.remove(SessionKey.BACKUP);
        Session.remove(SessionKey.ROOM);
        Session.remove(SessionKey.ROUNDS);
        setFinishAnimation(initFinishAnimation);
        setGameCards(initGameCardsList());
        setFetchLoading(false);
        setFinish(false);
        setPlayers([]);
    };
    return (
        <GamePlayContext.Provider
            value={{
                gameCards,
                setGameCards,
                fetchLoading,
                setFetchLoading,
                players,
                setPlayers,
                finish,
                setFinish,
                clearGameContext,
                refreshGameContext,
                finishAnimation,
                setCorrectPack,
                setPlayAgainBtn,
                setIncreaseScore,
                setRemovePosition,
                rounds,
                setRounds,
            }}
        >
            {children}
        </GamePlayContext.Provider>
    );
};
