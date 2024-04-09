import React from "react";
import FlippedCard from "../../core/FlippedCard";
import DraggableMovie from "../DraggableMovie";
import LoadingCard from "../../core/LoadingCard";
import useCardOrderPosition from "../../../../hooks/gameplay/useCardOrderPosition";
import { PlayerCardProps } from "../../../../models/types/props/card";
import usePlaceCard from "../../../../hooks/gameplay/usePlaceCard";
import { useDragContext } from "../../../../context/DndContext";

const PlayerCard: React.FC<PlayerCardProps> = ({ player, card }) => {
    const movie = card.movie;
    const position = useCardOrderPosition(player, card);
    const cardId = `${movie.id}-${player.id}`;
    const userAgent = navigator.userAgent;
    const isIPhone = /iPhone/.test(userAgent);

    const { handlePlaceCard } = usePlaceCard();
    const { isDragging } = useDragContext();

    const handleOnClick = () => {
        if (!isDragging && card) handlePlaceCard(card);
    };

    return (
        <FlippedCard
            card={card}
            front={<LoadingCard />}
            back={<DraggableMovie id={cardId} movie={movie} player={player} disabled={isIPhone} />}
            position={position}
            onClick={handleOnClick}
        />
    );
};

export default PlayerCard;
