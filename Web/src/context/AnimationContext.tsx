import { createContext, useContext, useState } from "react";

export const AnimationContext = createContext<{
    isFlipCard: boolean;
    setIsFlipCard: React.Dispatch<React.SetStateAction<boolean>>
    increaseScore: boolean;
    setIncreaseScore: React.Dispatch<React.SetStateAction<boolean>>;
    refreshAnimationContext: () => void;
    clearAnimationContext: () => void;
}>({
    isFlipCard: false,
    setIsFlipCard: () => {},
    increaseScore: false,
    setIncreaseScore: () => {},
    refreshAnimationContext: () => {},
    clearAnimationContext: () => {},
});

export const useAnimationContext = () => useContext(AnimationContext);

export const AnimationContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isFlipCard, setIsFlipCard] = useState<boolean>(false);
    const [increaseScore, setIncreaseScore] = useState<boolean>(false);

    const refreshAnimationContext = () => {
        setIncreaseScore(false);
    };
    
    const clearAnimationContext = () => {
        setIncreaseScore(false);
        setIsFlipCard(false);
    };

    return (
        <AnimationContext.Provider
            value={{
                isFlipCard,
                setIsFlipCard,
                increaseScore,
                setIncreaseScore,
                refreshAnimationContext,
                clearAnimationContext,
            }}
        >
            {children}
        </AnimationContext.Provider>
    );
};
