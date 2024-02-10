import { createContext, useContext, useState } from "react";
import { SessionKey } from "../models/enums/session";
import Session from "../utils/sessionStorage";
import { FinishAnimation } from "../models/types/game";
import { initFinishAnimation } from "../models/initialization/context";
import { Card } from "../models/types/card";
import { Player } from "../models/types/player";

export const GamePlayContext = createContext<{
    correctOrder: Card[];
    setCorrectOrder: React.Dispatch<React.SetStateAction<Card[]>>;
    players: Player[];
    setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
    finish: boolean;
    setFinish: React.Dispatch<React.SetStateAction<boolean>>;
    clearGameContext: () => void;
    refreshGameContext: () => void;
    finishAnimation: FinishAnimation;
    setCorrectPack: (showCorrectPack: (Card | undefined)[]) => void;
    setPlayAgainBtn: () => void;
    setIncreaseScore: () => void;
    setRemovePosition: () => void;
}>({
    correctOrder: [],
    setCorrectOrder: () => {},
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
});

export const useGamePlayContext = () => useContext(GamePlayContext);

export const GamePlayContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [correctOrder, setCorrectOrder] = useState<Card[]>([]);
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
        if (!correctOrder || correctOrder.length === 0) {
            const sessionCorrectOrder = Session.get(SessionKey.CORRECT_ORDER);
            if (sessionCorrectOrder && sessionCorrectOrder.length > 0) {
                setCorrectOrder(sessionCorrectOrder);
            }
        }
    };
    setStateFromSession();

    const setCorrectPack = (showCorrectPack: (Card | undefined)[]) =>
        setFinishAnimation((prev) => ({ ...prev, showCorrectPack }));

    const setPlayAgainBtn = () => {
        if(!finishAnimation.playAgainBtn){
            setFinishAnimation((prev) => ({ ...prev, playAgainBtn: true }));
        }
    };

    const setIncreaseScore = () => setFinishAnimation((prev) => ({ ...prev, increaseScore: true }));

    const setRemovePosition = () =>
        setFinishAnimation((prev) => ({ ...prev, removePosition: true }));

    const refreshGameContext = () => {
        Session.remove(SessionKey.CORRECT_ORDER);
        setFinishAnimation(initFinishAnimation);
        setCorrectOrder([]);
        setFinish(false);
        setPlayers((prev) => {
            const player = [...prev];
            player.forEach((player: Player) => {
                player.rightChoices = [];
                player.selectedCards = [];
            });
            return player;
        });
    };

    const clearGameContext = () => {
        Session.remove(SessionKey.PLAYERS);
        Session.remove(SessionKey.FILTERS);
        Session.remove(SessionKey.CORRECT_ORDER);
        Session.remove(SessionKey.BACKUP);
        setFinishAnimation(initFinishAnimation);
        setCorrectOrder([]);
        setFinish(false);
        setPlayers([]);
    };
    return (
        <GamePlayContext.Provider
            value={{
                correctOrder,
                setCorrectOrder,
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
            }}
        >
            {children}
        </GamePlayContext.Provider>
    );
};
