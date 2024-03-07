import React from "react";
import Card from "../../core/Card";
import { ResultCardProps } from "../../../../models/types/props/card";
import { placeholderCardType } from "../../../../models/types/card";
import { setElectedFrontCard } from "../../../../utils/card";
import ResultCardWrapper from "../../wrapper/ResultCardWrapper";

const ResultCard: React.FC<ResultCardProps> = ({ currentPlayer, card, index }) => {
    let isRightChoice = card?.isCorrect;
    const movie = card ? card.movie : currentPlayer.electedCards?.order[index]?.movie;
    const rate = movie?.imdbRating || 0;
    return (
        <ResultCardWrapper rate={rate} isRightChoice={isRightChoice}>
            <Card
                type={{ t: "Elected", index } as placeholderCardType}
                front={setElectedFrontCard(currentPlayer, movie, "small")}
                size="small"
            />
        </ResultCardWrapper>
    );
};

export default ResultCard;
