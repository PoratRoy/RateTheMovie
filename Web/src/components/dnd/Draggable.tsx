import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { dndStyle } from "../../style/dnd";
import { DraggableProps } from "../../models/types/props/dnd";
import { useGamePlayContext } from "../../context/GamePlayContext";

//TODO: zIndex not working because of the transform
const Draggable: React.FC<DraggableProps> = ({ children, draggableId, disabled, args }) => {
    const { game } = useGamePlayContext();

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: draggableId,
        data: args,
        disabled: disabled ? true : game?.isPlayerFinishRound ? true : false,
    });

    return (
        <div ref={setNodeRef} style={dndStyle(transform)} {...listeners} {...attributes}>
            {children}
        </div>
    );
};

export default Draggable;
