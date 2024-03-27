import { useEffect, useState } from "react";
import useDoubleClick from "../global/useDoubleClick";
import { useDragContext } from "../../context/DndContext";
//TODO: not in use
const useCardEvent = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const { isDoubleClick, handleDoubleClick } = useDoubleClick();
    const { isDragging } = useDragContext();

    useEffect(() => {
        if (isDragging) {
            setIsClicked(false);
        }
    }, [isDragging]);

    const handleMouseDown = () => {
        handleDoubleClick();
        setIsClicked(true);
    };

    return {
        isClicked,
        isDoubleClick,
        handleMouseDown,
    };
};

export default useCardEvent;

//const [isHovered, setIsHovered] = useState<boolean>(false);

// const handleMouseEnter = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
//     if (event.buttons === 1) {
//         setIsHovered(false);
//     } else {
//         setIsHovered(true);
//     }
// };

// const handleMouseLeave = () => {
//     setIsHovered(false);
// };

// const handleMouseUp = () => {
//     setIsClicked(false);
// };
