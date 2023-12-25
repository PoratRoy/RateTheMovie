import { createContext, useContext, useState } from "react";
import { Card } from "../models/types/card";

export const GamePlayContext = createContext<{
    rightOrder: Card[];
    setRightOrder: React.Dispatch<React.SetStateAction<Card[]>>;
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
}>({
    rightOrder: [],
    setRightOrder: () => {},
    score: 0,
    setScore: () => {},
});

export const useGamePlayContext = () => useContext(GamePlayContext);

export const GamePlayContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [rightOrder, setRightOrder] = useState<Card[]>([]);
    const [score, setScore] = useState<number>(0);

    return (
        <GamePlayContext.Provider value={{ rightOrder, setRightOrder, score, setScore }}>
            {children}
        </GamePlayContext.Provider>
    );
};
