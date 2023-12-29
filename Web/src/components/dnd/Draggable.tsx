import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { DraggableProps } from "../../models/types/props";
import { CSS } from "@dnd-kit/utilities";
//TODO: typescript moving multiple data objects as 1 object?
const Draggable: React.FC<DraggableProps> = ({ children, draggableId, movie, player }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: draggableId,
        data: { movie, player },
    });
    const style = {
        transform: CSS.Translate.toString(transform),
    };
    //TODO: put the card css also here so it would show the shadow when dragging
    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </div>
    );
};

export default Draggable;
