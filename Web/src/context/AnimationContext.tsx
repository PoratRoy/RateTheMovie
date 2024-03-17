import { createContext, useContext, useState } from "react";

export const AnimationContext = createContext<{
    isFlipCard: boolean;
    setIsFlipCard: React.Dispatch<React.SetStateAction<boolean>>;
    increaseScore: number;
    setIncreaseScore: React.Dispatch<React.SetStateAction<number>>;
    clearAnimationContext: () => void;
}>({
    isFlipCard: false,
    setIsFlipCard: () => {},
    increaseScore: 0,
    setIncreaseScore: () => {},
    clearAnimationContext: () => {},
});

export const useAnimationContext = () => useContext(AnimationContext);

export const AnimationContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isFlipCard, setIsFlipCard] = useState<boolean>(false);
    const [increaseScore, setIncreaseScore] = useState<number>(0);

    const clearAnimationContext = () => {
        setIncreaseScore(0);
        setIsFlipCard(false);
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
