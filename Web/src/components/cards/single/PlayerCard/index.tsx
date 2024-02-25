import React, { useState } from "react";
import Card from "../../core/Card";
import DraggableMovie from "../DraggableMovie";
import CardView from "../../../view/CardView";
import LoadingCard from "../../core/LoadingCard";
import { placeholderCardType } from "../../../../models/types/card";
import CardEventLayout from "../../../layout/CardEventLayout";
import useCardOrderPosition from "../../../../hooks/gameplay/useCardOrderPosition";
import { PlayerCardProps } from "../../../../models/types/props/card";

const PlayerCard: React.FC<PlayerCardProps> = ({ player, card, loading }) => {
    const movie = card.movie;
    const position = useCardOrderPosition(player, card);
    const [openCardView, setOpenCardView] = useState<boolean>(false);
    const [openShadow, setOpenShadow] = useState<boolean>(false);

    const isShadow = position === 0 ? openShadow : false;
    const cardId = `${movie.id}-${player.id}`;

    const back = <DraggableMovie isShadow={isShadow} id={cardId} movie={movie} player={player} />;

    return (
        <React.Fragment>
            <CardEventLayout setOpenCardView={setOpenCardView} setOpenShadow={setOpenShadow}>
                <Card
                    type={{ t: "Player", card } as placeholderCardType}
                    flip={loading != undefined && !loading}
                    front={<LoadingCard />}
                    back={back}
                    position={position}
                />
            </CardEventLayout>
            {openCardView ? <CardView movie={movie} close={() => setOpenCardView(false)} /> : null}
        </React.Fragment>
    );
};

export default PlayerCard;
