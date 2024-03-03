import React from "react";
import Card from "../../core/Card";
import { ResultCardProps } from "../../../../models/types/props/card";
import { placeholderCardType } from "../../../../models/types/card";
import { setElectedFrontCard } from "../../../../utils/card";
import ResultCardWrapper from "../../wrapper/ResultCardWrapper";
import { handleOrderEqualCorrectOrder } from "../../../../utils/correctOrder";

const ResultCard: React.FC<ResultCardProps> = ({ currentPlayer, movie, index }) => {
    let isRightChoice = false;
    handleOrderEqualCorrectOrder(currentPlayer, movie, index, () => {isRightChoice = true})
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
