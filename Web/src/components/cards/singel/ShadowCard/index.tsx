import React from "react";
import { ShadowCardProps } from "../../../../models/types/props";
import Card from "../../core/Card";
import Img from "../../core/Img";
const ShadowCard: React.FC<ShadowCardProps> = ({ movie }) => {
    const { title, poster_path } = movie;

    return <Card>{<Img alt={title} src={poster_path} />}</Card>;
};

export default ShadowCard;
