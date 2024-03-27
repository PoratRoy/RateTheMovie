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
}>({
    isFlipCard: undefined,
    setIsFlipCard: () => {},
    increaseScore: 0,
    setIncreaseScore: () => {},
    clearAnimationContext: () => {},
});

export const useAnimationContext = () => useContext(AnimationContext);

export const AnimationContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isFlipCard, setIsFlipCard] = useState<CardFace | undefined>();
    const [increaseScore, setIncreaseScore] = useState<number | undefined>();

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
