import React from "react";
import Card from "../../core/Card";
import Img from "../../core/Img";
import { CorrectCardProps } from "../../../../models/types/props";

const CorrectCard: React.FC<CorrectCardProps> = ({ movie }) => {
    const { title, poster_path } = movie;

    return (
        <Card>
            <Img alt={title} src={poster_path} />
        </Card>
    );
};

export default CorrectCard;
