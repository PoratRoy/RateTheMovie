import { createContext, useContext, useState } from "react";
import { Card } from "../models/types/card";

export const CardsContext = createContext<{
    correctOrder: Card[];
    setCorrectOrder: React.Dispatch<React.SetStateAction<Card[]>>;
}>({
    correctOrder: [],
    setCorrectOrder: () => {},
});

export const useCardsContext = () => useContext(CardsContext);

export const CardsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [correctOrder, setCorrectOrder] = useState<Card[]>([]);

    return (
        <CardsContext.Provider value={{ correctOrder, setCorrectOrder }}>
            {children}
        </CardsContext.Provider>
    );
};
