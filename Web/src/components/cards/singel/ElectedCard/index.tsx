import React, { useState } from "react";
import { placeholderCardType } from "../../../../models/types/card";
import Card from "../../core/Card";
import ElectedCardWrapper from "../../wrapper/ElectedCardWrapper";
import { ElectedCardProps } from "../../../../models/types/props";
import { setElectedFrontCard } from "../../../../utils/card";
import { handleOrderEqualCorrectOrder } from "../../../../utils/correctOrder";

const ElectedCard: React.FC<ElectedCardProps> = ({ player, index, movie }) => {
    const [focus, setFocus] = useState<boolean>(false);
    let isRightChoice = false;
    handleOrderEqualCorrectOrder(player, movie, index, () => {isRightChoice = true})
    const rate = movie?.imdbRating || 0;

    return (
        <ElectedCardWrapper
            isRightChoice={isRightChoice}
            rate={rate}
            index={index.toString()}
            setFocus={setFocus}
        >
            <Card
                type={{ t: "Elected", index } as placeholderCardType}
                front={setElectedFrontCard(player, movie)}
                size="small"
                isFocus={focus}
            />
        </ElectedCardWrapper>
    );
};

export default ElectedCard;