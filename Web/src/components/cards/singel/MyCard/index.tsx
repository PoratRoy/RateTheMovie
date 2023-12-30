import React, { useState } from "react";
import Card from "../../core/Card";
import Img from "../../core/Img";
import Draggable from "../../../dnd/Draggable";
import { MyCardProps } from "../../../../models/types/props";
import CardView from "../../../view/CardView";

const MyCard: React.FC<MyCardProps> = ({ movie, loading, player }) => {
    const [open, setOpen] = useState<boolean>(false);
    const { id, title, poster_path } = movie;
    const draggableId = `${id}-${player.id}`;
    return (
        <Draggable draggableId={draggableId} movie={movie} player={player}>
            <Card onHover={title}>{!loading ? <Img alt={title} src={poster_path} /> : "o"}</Card>
            {open && <CardView movie={movie} />}
        </Draggable>
    );
};

export default MyCard;
