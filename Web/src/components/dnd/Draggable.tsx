import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { DraggableProps } from "../../models/types/props";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { dndStyle } from "../../style/dnd";

//TODO: zIndex not working because of the transform
const Draggable: React.FC<DraggableProps> = ({ children, draggableId, props }) => {
    const { finish } = useGamePlayContext();

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: draggableId,
        data: props,
        disabled: finish ? true : false,
    });

    return (
        <div ref={setNodeRef} style={dndStyle(transform)} {...listeners} {...attributes}>
            {children}
        </div>
    );
};

export default Draggable;
