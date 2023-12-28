import React from "react";
import style from "./SelectedCard.module.css";
import Card from "../../core/Card";
import Img from "../../core/Img";
import PlaceholderIcon from "../../core/PlaceholderIcon";
import { SelectedCardProps } from "../../../../models/types/props";
import Draggable from "../../../dnd/Draggable";
import Droppable from "../../../dnd/Droppable";

const SelectedCard: React.FC<SelectedCardProps> = ({ movie, index }) => {
    return (
        <Droppable droppableId={index}>
            <Draggable draggableId={movie?.imdbID || ""} movie={movie}>
                <Card>
                    {movie ? (
                        <Img alt={movie.title} src={movie.poster_path} />
                    ) : (
                        <PlaceholderIcon />
                    )}
                </Card>
            </Draggable>
        </Droppable>
    );
};

export default SelectedCard;
