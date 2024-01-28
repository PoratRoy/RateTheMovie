import { useEffect, useState } from "react";

const useCardFlipAnimation = (flip: boolean | undefined) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [isAnimation, setIsAnimation] = useState<boolean>(false);

    const onAnimationComplete = () => {
        setIsAnimation(false);
    };

    useEffect(() => {
        if(!isAnimation){
            setIsFlipped(flip ? true : false);
            if (flip) {
                setIsAnimation(true);
            }
        }
    }, [flip]);

    return { isFlipped, onAnimationComplete };
};

export default useCardFlipAnimation;
