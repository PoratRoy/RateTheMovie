import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { DraggableProps } from "../../models/types/props";
import { CSS } from "@dnd-kit/utilities";

const Draggable: React.FC<DraggableProps> = ({ children, draggableId, movie }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: draggableId,
        data: { movie },
    });
    const style = {
        transform: CSS.Translate.toString(transform),
    };

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </div>
    );
};

export default Draggable;
