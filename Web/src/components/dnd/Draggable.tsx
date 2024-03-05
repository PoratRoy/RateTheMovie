import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { dndStyle } from "../../style/dnd";
import { DraggableProps } from "../../models/types/props/dnd";

//TODO: zIndex not working because of the transform
//TODO: ...args: any[]
const Draggable: React.FC<DraggableProps> = ({ children, draggableId, props }) => {
    const { finishRound } = useGamePlayContext();

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: draggableId,
        data: props,
        disabled: finishRound ? true : false,
    });

    return (
        <div ref={setNodeRef} style={dndStyle(transform)} {...listeners} {...attributes}>
            {children}
        </div>
    );
};

export default Draggable;
