import React from "react";
import FlippedCard from "../../core/FlippedCard";
import DraggableMovie from "../DraggableMovie";
import LoadingCard from "../../core/LoadingCard";
import CardEventLayout from "../../../layout/CardEventLayout";
import useCardOrderPosition from "../../../../hooks/gameplay/useCardOrderPosition";
import { PlayerCardProps } from "../../../../models/types/props/card";

const PlayerCard: React.FC<PlayerCardProps> = ({ player, card }) => {
    const movie = card.movie;
    const position = useCardOrderPosition(player, card);
    const cardId = `${movie.id}-${player.id}`;
    const userAgent = navigator.userAgent;
    const isIPhone = /iPhone/.test(userAgent);

    return (
        <CardEventLayout card={card}>
            <FlippedCard
                card={card}
                front={<LoadingCard />}
                back={
                    <DraggableMovie id={cardId} movie={movie} player={player} disabled={isIPhone} />
                }
                position={position}
            />
        </CardEventLayout>
    );
};

export default PlayerCard;
