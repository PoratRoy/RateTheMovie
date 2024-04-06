import { createContext, useContext, useState } from "react";
import { CardFace } from "../models/enums/animation";
import { SessionKey } from "../models/enums/session";
import Session from "../utils/storage/sessionStorage";
import { Player } from "../models/types/player";

export const AnimationContext = createContext<{
    isFlipCard: CardFace | undefined;
    setIsFlipCard: React.Dispatch<React.SetStateAction<CardFace | undefined>>;
    increaseScore: number | undefined;
    setIncreaseScore: React.Dispatch<React.SetStateAction<number | undefined>>;
    clearAnimationContext: () => void;
    activateFinishAnimation: boolean;
    setActivateFinishAnimation: React.Dispatch<React.SetStateAction<boolean>>
}>({
    isFlipCard: undefined,
    setIsFlipCard: () => {},
    increaseScore: 0,
    setIncreaseScore: () => {},
    activateFinishAnimation: false,
    setActivateFinishAnimation: () => {},
    clearAnimationContext: () => {},
});

export const useAnimationContext = () => useContext(AnimationContext);

export const AnimationContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isFlipCard, setIsFlipCard] = useState<CardFace | undefined>();
    const [increaseScore, setIncreaseScore] = useState<number | undefined>();
    const [activateFinishAnimation, setActivateFinishAnimation] = useState<boolean>(false);

    //TODO: extract to a hook
    //TODO: put as useCallBack
    const setStateFromSession = () => {
        if (!isFlipCard) {
            setIsFlipCard(CardFace.FRONT);
        }
        if (increaseScore === undefined) {
            const sessionPlayer: Player | undefined = Session.get(SessionKey.CURRENT_PLAYER);
            if (sessionPlayer) {
                setIncreaseScore(sessionPlayer.score);
            }
        }
    };
    setStateFromSession();

    const clearAnimationContext = () => {
        setIncreaseScore(0);
        setActivateFinishAnimation(false);
        setIsFlipCard(CardFace.BACK);
    };

    return (
        <AnimationContext.Provider
            value={{
                isFlipCard,
                setIsFlipCard,
                increaseScore,
                setIncreaseScore,
                activateFinishAnimation,
                setActivateFinishAnimation,
                clearAnimationContext,
            }}
        >
            {children}
        </AnimationContext.Provider>
    );
};
