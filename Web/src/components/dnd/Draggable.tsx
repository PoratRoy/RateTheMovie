import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { dndStyle } from "../../style/dnd";
import { DraggableProps } from "../../models/types/props/dnd";
import { useGameStatusContext } from "../../context/GameStatusContext";

//TODO: zIndex not working because of the transform
//TODO: ...args: any[]
const Draggable: React.FC<DraggableProps> = ({ children, draggableId, props }) => {
    const {
        gameStatus: { isPlayerFinishRound },
    } = useGameStatusContext();

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: draggableId,
        data: props,
        disabled: isPlayerFinishRound ? true : false,
    });

    return (
        <div ref={setNodeRef} style={dndStyle(transform)} {...listeners} {...attributes}>
            {children}
        </div>
    );
};

export default Draggable;
