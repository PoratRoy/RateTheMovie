import { useState } from "react";
import useDoubleClick from "./useDoubleClick";

const useCardEvent = () => {
    const [isHovered, setIsHovered] = useState(false);
    const { isDoubleClick, handleDoubleClick } = useDoubleClick();

    const handleMouseEnter = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (event.buttons === 1) {
            setIsHovered(false);
        } else {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseDown = () => {
        setIsHovered(false);
        handleDoubleClick();
    };

    const handleMouseUp = () => {
        setIsHovered(true);
    };

    return {
        isHovered,
        isDoubleClick,
        handleMouseEnter,
        handleMouseLeave,
        handleMouseDown,
        handleMouseUp,
    };
};

export default useCardEvent;
