import React from "react";
import style from "./CardSlice.module.css";
import { CardSliceProps } from "../../../../models/types/props";
import Img from "../Img";
import Draggable from "../../../dnd/Draggable";
import { Card } from "../../../../models/types/card";

const CardSlice: React.FC<CardSliceProps> = ({ side, player, index }) => {
    const card = player.selectedCards[index];
    const setDraggableCard = (card?: Card) => {
        if (card) {
            const { movie: { title, poster_path, imdbID } } = card;
            if (title !== "") {
                const draggableId = `${imdbID}-${player.id}`;
                return (
                    <Draggable draggableId={draggableId} movie={card.movie} player={player}>
                        <Img alt={title} src={poster_path} />
                    </Draggable>
                );
            }
        }
        return <div>empty</div>;
    };
    return <div className={`${style.cardSliceContanier} ${side}`}>{setDraggableCard(card)}</div>;
};

export default CardSlice;
