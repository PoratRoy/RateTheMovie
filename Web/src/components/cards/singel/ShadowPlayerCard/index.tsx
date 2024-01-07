import React from "react";
import Img from "../../core/Img";
import { ShadowPlayerCardProps } from "../../../../models/types/props";
import Card from "../../core/Card";

const ShadowPlayerCard: React.FC<ShadowPlayerCardProps> = ({ movie, id }) => {
    if (!movie) return null;
    const { title, poster_path } = movie;
    return (
        <Card id={id} width={60} height={85} front={<Img alt={title} src={poster_path} />}></Card>
    );
};

export default ShadowPlayerCard;
