import React from "react";
import { Movie } from "../../../../models/types/movie";
import Card from "../../core/Card";
import Img from "../../core/Img";

type ShadowOptionCardProps = {
    movie?: Movie;
};

const ShadowOptionCard: React.FC<ShadowOptionCardProps> = ({ movie }) => {
    if(!movie) return null;
    const { title, poster_path } = movie;
    return (
        <Card width={60} height={85}>
            <Img alt={title} src={poster_path} />
        </Card>
    );
};

export default ShadowOptionCard;
