import { createContext, useContext, useState } from "react";
import { Card } from "../models/types/card";

export const CardsContext = createContext<{
    selectedCards: Card[];
    setSelectedCards: React.Dispatch<React.SetStateAction<Card[]>>;
    correctOrder: Card[];
    setCorrectOrder: React.Dispatch<React.SetStateAction<Card[]>>;
}>({
    selectedCards: [],
    setSelectedCards: () => {},
    correctOrder: [],
    setCorrectOrder: () => {},
});

export const useCardsContext = () => useContext(CardsContext);

export const CardsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedCards, setSelectedCards] = useState<Card[]>([]);
    const [correctOrder, setCorrectOrder] = useState<Card[]>([]);

    return (
        <CardsContext.Provider
            value={{ selectedCards, setSelectedCards, correctOrder, setCorrectOrder }}
        >
            {children}
        </CardsContext.Provider>
    );
};
