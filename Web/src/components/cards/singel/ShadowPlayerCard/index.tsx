import React from "react";
import Card from "../../core/Card";
import Img from "../../core/Img";
import { ShadowPlayerCardProps } from "../../../../models/types/props";

const ShadowPlayerCard: React.FC<ShadowPlayerCardProps> = ({ movie, id }) => {
    if (!movie) return null;
    const { title, poster_path } = movie;
    return (
        <Card id={id} width={60} height={85} front={<Img alt={title} src={poster_path} />}></Card>
    );
};

export default ShadowPlayerCard;
