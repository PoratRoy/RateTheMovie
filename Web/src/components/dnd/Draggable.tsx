import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { dndStyle } from "../../style/dnd";
import { DraggableProps } from "../../models/types/props/dnd";
import { useGameStatusContext } from "../../context/GameStatusContext";

//TODO: zIndex not working because of the transform
const Draggable: React.FC<DraggableProps> = ({ children, draggableId, args }) => {
    const {
        gameStatus: { isPlayerFinishRound },
    } = useGameStatusContext();

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: draggableId,
        data: args,
        disabled: isPlayerFinishRound ? true : false,
    });

    return (
        <div ref={setNodeRef} style={dndStyle(transform)} {...listeners} {...attributes}>
            {children}
        </div>
    );
};

export default Draggable;
