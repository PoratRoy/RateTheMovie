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
}>({
    correctOrder: [],
    setCorrectOrder: () => {},
    players: [],
    setPlayers: () => {},
    finish: false,
    setFinish: () => {},
});

export const useGamePlayContext = () => useContext(GamePlayContext);

export const GamePlayContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [correctOrder, setCorrectOrder] = useState<Card[]>([]);
    const [players, setPlayers] = useState<Player[]>([]);
    const [finish, setFinish] = useState<boolean>(false);

    return (
        <GamePlayContext.Provider
            value={{ correctOrder, setCorrectOrder, players, setPlayers, finish, setFinish }}
        >
            {children}
        </GamePlayContext.Provider>
    );
};
