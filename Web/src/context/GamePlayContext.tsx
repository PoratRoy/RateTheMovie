import { createContext, useContext, useState } from "react";
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
}>({
    correctOrder: [],
    setCorrectOrder: () => {},
    players: [],
    setPlayers: () => {},
    finish: false,
    setFinish: () => {},
    clearGameContext: () => {},
});

export const useGamePlayContext = () => useContext(GamePlayContext);

export const GamePlayContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [correctOrder, setCorrectOrder] = useState<Card[]>([]);
    const [players, setPlayers] = useState<Player[]>([]);
    const [finish, setFinish] = useState<boolean>(false);

    const clearGameContext = () => {
        setCorrectOrder([]);
        setPlayers([]);
        setFinish(false);
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
            }}
        >
            {children}
        </GamePlayContext.Provider>
    );
};
