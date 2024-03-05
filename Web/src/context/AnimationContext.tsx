import { createContext, useContext, useState } from "react";
import { FinishAnimation } from "../models/types/game";
import { initFinishAnimation } from "../models/initialization/context";

export const AnimationContext = createContext<{
    isFlipCard: boolean;
    setIsFlipCard: (value: boolean) => void;
    finishAnimation: FinishAnimation;
    setNextRound: (nextRound?: boolean) => void;
    setIncreaseScore: () => void;
    refreshAnimationContext: () => void;
    clearAnimationContext: () => void;
}>({
    isFlipCard: false,
    setIsFlipCard: () => {},
    finishAnimation: initFinishAnimation,
    setNextRound: () => {},
    setIncreaseScore: () => {},
    refreshAnimationContext: () => {},
    clearAnimationContext: () => {},
});

export const useAnimationContext = () => useContext(AnimationContext);

export const AnimationContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isFlipCard, setIsFlipCard] = useState<boolean>(false);
    const [finishAnimation, setFinishAnimation] = useState<FinishAnimation>(initFinishAnimation);

    const setNextRound = (nextRound: boolean = true) => {
        if (!finishAnimation.nextRound) {
            setFinishAnimation((prev) => ({ ...prev, nextRound }));
        }
    };

    const setIncreaseScore = () => setFinishAnimation((prev) => ({ ...prev, increaseScore: true }));

    const refreshAnimationContext = () => {
        setFinishAnimation(initFinishAnimation);
    };

    const clearAnimationContext = () => {
        setFinishAnimation(initFinishAnimation);
        setIsFlipCard(false);
    };

    return (
        <AnimationContext.Provider
            value={{
                isFlipCard,
                setIsFlipCard,
                finishAnimation,
                setNextRound,
                setIncreaseScore,
                refreshAnimationContext,
                clearAnimationContext,
            }}
        >
            {children}
        </AnimationContext.Provider>
    );
};
