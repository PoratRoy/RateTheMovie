import React from "react";
import Card from "../../core/Card";
import { ResultCardProps } from "../../../../models/types/props/card";
import { placeholderCardType } from "../../../../models/types/card";
import { setElectedFrontCard } from "../../../../utils/card";
import ResultCardWrapper from "../../wrapper/ResultCardWrapper";

const ResultCard: React.FC<ResultCardProps> = ({
    player,
    card,
    index,
    showRate = false,
    size = "small",
}) => {
    let isRightChoice = card?.isCorrect || false;
    const movie = card ? card.movie : player.electedCards?.order[index]?.movie;
    const rate = showRate ? movie?.imdbRating : undefined;
    return (
        <ResultCardWrapper rate={rate} isRightChoice={isRightChoice}>
            <Card
                type={{ t: "Elected", index } as placeholderCardType}
                front={setElectedFrontCard(player, movie, size)}
                size={size}
            />
        </ResultCardWrapper>
    );
};

export default ResultCard;
