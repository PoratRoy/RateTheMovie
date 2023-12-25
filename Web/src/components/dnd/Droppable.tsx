import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { DroppableProps } from "../../models/types/props";

const Droppable: React.FC<DroppableProps> = ({ children, droppableId }) => {
    const { isOver, setNodeRef } = useDroppable({
        id: droppableId,
    });
    const style = {
        color: isOver ? "green" : undefined,
    };

    return (
        <div ref={setNodeRef} style={style}>
            {children}
        </div>
    );
};

export default Droppable;
