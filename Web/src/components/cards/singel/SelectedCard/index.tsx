import React from "react";
import style from "./SelectedCard.module.css";
import Card from "../../core/Card";
import Img from "../../core/Img";
import PlaceholderIcon from "../../core/PlaceholderIcon";
import { SelectedCardProps } from "../../../../models/types/props";

const SelectedCard: React.FC<SelectedCardProps> = ({ movie }) => {
    return (
        <Card>
            {movie ? <Img alt={movie.title} src={movie.poster_path} /> : <PlaceholderIcon />}
        </Card>
    );
};

export default SelectedCard;
