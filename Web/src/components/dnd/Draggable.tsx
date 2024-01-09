import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { DraggableProps } from "../../models/types/props";
import { CSS } from "@dnd-kit/utilities";
//TODO: prevent drag and drop when finish
//TODO: typescript moving multiple data objects as 1 object?
const Draggable: React.FC<DraggableProps> = ({ children, draggableId, movie, player }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: draggableId,
        data: { movie, player },
    });
    const style: React.CSSProperties = {
        transform: CSS.Translate.toString(transform),
        touchAction: "none",
        zIndex: 1000,
        cursor: "pointer",
        // border: `7px solid ${TERTIARY_COLOR}`,
        // borderRadius: PRIMARY_BORDER_RADIUS,
        // overflow: "hidden",
    };
    //TODO: put the card css also here so it would show the shadow when dragging
    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </div>
    );
};

export default Draggable;
