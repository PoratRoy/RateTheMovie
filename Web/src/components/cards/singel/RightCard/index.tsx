import React from "react";
import Card from "../../core/Card";
import Img from "../../core/Img";
import { RightCardProps } from "../../../../models/types/props";

const RightCard: React.FC<RightCardProps> = ({ movie }) => {
    const { title, poster_path } = movie;

    return (
        <Card width={100} height={165}>
            <Img alt={title} src={poster_path} />
        </Card>
    );
};

export default RightCard;
