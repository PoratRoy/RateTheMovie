import React, { useState } from "react";
import Card from "../../core/Card";
import { MyCardProps } from "../../../../models/types/props";
import DraggableMovie from "../DraggableMovie";
import Img from "../../core/Img";
import CardView from "../../../view/CardView";

const MyCard: React.FC<MyCardProps> = ({ movie, loading, player }) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <Card flip={loading != undefined && !loading }>
            <DraggableMovie isHover movie={movie} player={player} setOpen={setOpen} />
            <Img isShadow alt={movie.title} src={movie.poster_path} />
            {open && <CardView movie={movie} />}
        </Card>
    );
};

export default MyCard;
