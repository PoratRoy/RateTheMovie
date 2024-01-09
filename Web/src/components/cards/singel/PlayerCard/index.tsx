import React, { useState } from "react";
import Card from "../../core/Card";
import { PlayerCardProps } from "../../../../models/types/props";
import DraggableMovie from "../DraggableMovie";
import CardView from "../../../view/CardView";
import LoadingCard from "../../core/LoadingCard";
import { placeholderCardType } from "../../../../models/types/card";

const PlayerCard: React.FC<PlayerCardProps> = ({ movie, loading, player }) => {
    const [open, setOpen] = useState<boolean>(false);
    const cardId = `${movie.id}-${player.id}`;
    return (
        <Card
            type={{ t: "Player", movie } as placeholderCardType}
            flip={loading != undefined && !loading}
            front={<LoadingCard />}
            back={
                <React.Fragment>
                    <DraggableMovie
                        isClickable
                        isHover
                        id={cardId}
                        movie={movie}
                        player={player}
                        setOpen={setOpen}
                        side="all"
                    />
                    {open && <CardView movie={movie} />}
                </React.Fragment>
            }
        />
    );
};

export default PlayerCard;
