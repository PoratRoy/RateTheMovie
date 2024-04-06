import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { dndStyle } from "../../style/dnd";
import { DraggableProps } from "../../models/types/props/dnd";
// import { useGamePlayContext } from "../../context/GamePlayContext";

//TODO: zIndex not working because of the transform
const Draggable: React.FC<DraggableProps> = ({ children, draggableId, args }) => {
    // const { game } = useGamePlayContext();

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: draggableId,
        data: args,
        // disabled: game?.isPlayerFinishRound ? true : false,
    });

    // const handleOnTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    //     // e.preventDefault();
    //     //TODO: https://github.com/clauderic/dnd-kit/issues/791
    // }
    //onTouchMove={handleOnTouchMove}

    return (
        <div ref={setNodeRef} style={dndStyle(transform)} {...listeners} {...attributes}>
            {children}
        </div>
    );
};

export default Draggable;
