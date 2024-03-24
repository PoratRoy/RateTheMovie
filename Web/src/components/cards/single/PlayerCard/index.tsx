import React, { useState } from "react";
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
    const [openShadow, setOpenShadow] = useState<boolean>(false);

    const isShadow = position === 0 ? openShadow : false;
    const cardId = `${movie.id}-${player.id}`;

    const Back = <DraggableMovie isShadow={isShadow} id={cardId} movie={movie} player={player} />;

    return (
        <CardEventLayout movie={movie} setOpenShadow={setOpenShadow}>
            <Card
                type={{ t: "Player", card } as placeholderCardType}
                front={<LoadingCard />}
                back={Back}
                position={position}
            />
        </CardEventLayout>
    );
};

export default PlayerCard;
