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

    return (
        <CardEventLayout card={card}>
            <FlippedCard
                card={card}
                front={<LoadingCard />}
                back={
                    <section>
                        {movie && movie.title ? (
                            <DraggableMovie id={cardId} movie={movie} player={player} />
                        ) : (
                            <React.Fragment />
                        )}
                    </section>
                }
                position={position}
            />
        </CardEventLayout>
    );
};

export default PlayerCard;
