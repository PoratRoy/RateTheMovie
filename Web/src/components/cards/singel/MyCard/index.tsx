import React from "react";
import style from "./MyCard.module.css";
import Card from "../../core/Card";
import Img from "../../core/Img";
import Draggable from "../../../dnd/Draggable";
import { MyCardProps } from "../../../../models/types/props";

const MyCard: React.FC<MyCardProps> = ({ movie, loading }) => {
    const { id, title, poster_path } = movie;

    return (
        <Draggable draggableId={id} movie={movie}>
            <Card onHover={title}>{!loading ? <Img alt={title} src={poster_path} /> : "o"}</Card>
        </Draggable>
    );
};

export default MyCard;
