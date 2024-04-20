import React from "react";
import Card from "../../core/Card";
import { ResultCardProps } from "../../../../models/types/props/card";
import ResultCardWrapper from "../../wrapper/ResultCardWrapper";
import Movie from "../../core/Movie";

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
                content={
                    <Movie
                        size={size}
                        movie={movie}
                        actions={[]}
                    />
                }
                size={size}
                hasBorder
                index={index}
            />
        </ResultCardWrapper>
    );
};

export default ResultCard;
