import { createContext, useContext, useState } from "react";
import { CardFace } from "../models/enums/animation";

export const AnimationContext = createContext<{
    isFlipCard: CardFace;
    setIsFlipCard: React.Dispatch<React.SetStateAction<CardFace>>;
    increaseScore: number;
    setIncreaseScore: React.Dispatch<React.SetStateAction<number>>;
    clearAnimationContext: () => void;
}>({
    isFlipCard: CardFace.BACK,
    setIsFlipCard: () => {},
    increaseScore: 0,
    setIncreaseScore: () => {},
    clearAnimationContext: () => {},
});

export const useAnimationContext = () => useContext(AnimationContext);

export const AnimationContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isFlipCard, setIsFlipCard] = useState<CardFace>(CardFace.BACK);
    const [increaseScore, setIncreaseScore] = useState<number>(0);

    const clearAnimationContext = () => {
        setIncreaseScore(0);
        setIsFlipCard(CardFace.BACK);
    };

    return (
        <AnimationContext.Provider
            value={{
                isFlipCard,
                setIsFlipCard,
                increaseScore,
                setIncreaseScore,
                clearAnimationContext,
            }}
        >
            {children}
        </AnimationContext.Provider>
    );
};
