import React from "react";
import style from "./MyCard.module.css";
import Card from "../../core/Card";
import Img from "../../core/Img";
import { MyCardProps } from "../../../../models/types/props";

const MyCard: React.FC<MyCardProps> = ({ movie, loading }) => {
    const { title, poster_path } = movie;

    return (
        <Card onHover={title}>
            {!loading && <Img alt={title} src={poster_path} />}
        </Card>
    );
};

export default MyCard;
