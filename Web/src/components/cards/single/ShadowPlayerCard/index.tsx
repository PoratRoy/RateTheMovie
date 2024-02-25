import React from "react";
import Img from "../../core/Img";
import Card from "../../core/Card";
import { placeholderCardType } from "../../../../models/types/card";
import { ShadowPlayerCardProps } from "../../../../models/types/props/card";

const ShadowPlayerCard: React.FC<ShadowPlayerCardProps> = ({ movie, id }) => {
    if (!movie) return null;
    const { title, poster_path } = movie;
    return (
        <Card
            id={id}
            size="small"
            type={{ t: "Shadow" } as placeholderCardType}
            front={<Img alt={title} src={poster_path} size="small" />}
        />
    );
};

export default ShadowPlayerCard;
