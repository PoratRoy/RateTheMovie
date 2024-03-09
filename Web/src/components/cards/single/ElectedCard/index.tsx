import React, { useState } from "react";
import { placeholderCardType } from "../../../../models/types/card";
import Card from "../../core/Card";
import ElectedCardWrapper from "../../wrapper/ElectedCardWrapper";
import { setElectedFrontCard } from "../../../../utils/card";
import { ElectedCardProps } from "../../../../models/types/props/card";

const ElectedCard: React.FC<ElectedCardProps> = ({ player, index, card }) => {
    const [focus, setFocus] = useState<boolean>(false);
    let isRightChoice = card?.isCorrect || false;
    const movie = card ? card.movie : player.electedCards?.order[index]?.movie;
    const rate = movie?.imdbRating || 0;

    return (
        <ElectedCardWrapper
            isRightChoice={isRightChoice}
            rate={rate}
            index={index.toString()}
            setFocus={setFocus}
        >
            <Card
                type={{ t: "Elected", index, hasDecoration: true } as placeholderCardType}
                front={setElectedFrontCard(player, movie)}
                size="medium"
                isFocus={focus}
            />
        </ElectedCardWrapper>
    );
};

export default ElectedCard;