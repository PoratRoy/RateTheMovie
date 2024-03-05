import { useEffect, useState } from "react";
import { useAnimationContext } from "../../context/AnimationContext";

const useCardFlipAnimation = () => {
    const { setIsFlipCard, isFlipCard } = useAnimationContext();
    const [isFlipped, setIsFlipped] = useState<number>(360);
    const [isAnimation, setIsAnimation] = useState<boolean>(false);

    const onAnimationComplete = () => {
        setIsAnimation(false);
    };

    useEffect(() => {
        if(!isAnimation && isFlipCard){
            setIsFlipped((prev) => (prev === 180 ? 360 : 180));
            setIsFlipCard(false);
            setIsAnimation(true);
        }
    }, [isFlipCard]);

    return { isFlipped, onAnimationComplete };
};

export default useCardFlipAnimation;
