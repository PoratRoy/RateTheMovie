import { useEffect, useState } from "react";

const useCardAnimation = (flip: boolean | undefined) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [isAnimation, setIsAnimation] = useState<boolean>(false);

    const onAnimationComplete = () => {
        setIsAnimation(false);
    };

    useEffect(() => {
        if (flip && !isAnimation) {
            setIsAnimation(true);
            setIsFlipped(true);
        }
    }, [flip]);

    return { isFlipped, onAnimationComplete };
};

export default useCardAnimation;
