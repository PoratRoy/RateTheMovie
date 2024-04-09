import React from "react";
import Card from "../../core/Card";
import { PreviewCardProps } from "../../../../models/types/props/card";
import Movie from "../../core/Movie";

const PreviewCard: React.FC<PreviewCardProps> = ({ movie, openModal }) => {
    const handleOnClick = () => {
        openModal(movie);
    };

    return (
        <Card
            content={<Movie size="large" movie={movie} actions={["doubleClick"]} />}
            onClick={handleOnClick}
        />
    );
};

export default PreviewCard;
