import { createContext, useContext, useState } from "react";
import { Card } from "../models/types/card";
import { PlayersNumber } from "../models/types/union";

export const GamePlayContext = createContext<{
    rightOrder: Card[];
    setRightOrder: React.Dispatch<React.SetStateAction<Card[]>>;
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    players: PlayersNumber;
    setPlayers: React.Dispatch<React.SetStateAction<PlayersNumber>>;
}>({
    rightOrder: [],
    setRightOrder: () => {},
    score: 0,
    setScore: () => {},
    players: 1,
    setPlayers: () => {},
});

export const useGamePlayContext = () => useContext(GamePlayContext);

export const GamePlayContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [rightOrder, setRightOrder] = useState<Card[]>([]);
    const [score, setScore] = useState<number>(0);
    const [players, setPlayers] = useState<PlayersNumber>(1);

    return (
        <GamePlayContext.Provider
            value={{ rightOrder, setRightOrder, score, setScore, players, setPlayers }}
        >
            {children}
        </GamePlayContext.Provider>
    );
};
