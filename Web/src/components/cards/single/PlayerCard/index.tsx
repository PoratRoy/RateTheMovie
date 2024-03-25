import React from "react";
import Card from "../../core/Card";
import DraggableMovie from "../DraggableMovie";
import LoadingCard from "../../core/LoadingCard";
import { placeholderCardType } from "../../../../models/types/card";
import CardEventLayout from "../../../layout/CardEventLayout";
import useCardOrderPosition from "../../../../hooks/gameplay/useCardOrderPosition";
import { PlayerCardProps } from "../../../../models/types/props/card";

const PlayerCard: React.FC<PlayerCardProps> = ({ player, card }) => {
    const movie = card.movie;
    const position = useCardOrderPosition(player, card);
    const cardId = `${movie.id}-${player.id}`;

    return (
        <CardEventLayout card={card}>
            <Card
                type={{ t: "Player", card } as placeholderCardType}
                front={<LoadingCard />}
                back={<DraggableMovie id={cardId} movie={movie} player={player} />}
                position={position}
            />
        </CardEventLayout>
    );
};

export default PlayerCard;
