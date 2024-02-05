import React, { useState } from "react";
import { placeholderCardType } from "../../../../models/types/card";
import Card from "../../core/Card";
import ElectedCardWrapper from "../../wrapper/ElectedCardWrapper";
import { ElectedCardProps } from "../../../../models/types/props";
import { setElectedFrontCard } from "../../../../utils/card";

const ElectedCard: React.FC<ElectedCardProps> = ({ player, index, card }) => {
    const [focus, setFocus] = useState<boolean>(false);
    const isRightChoice = player.rightChoices[index] ? true : false;
    const rate = card?.rate || 0;
    console.log(`player ${card?.movie.title} | player.rightChoices[index]: ${player.rightChoices[index]?.title} | isRightChoice ${isRightChoice} rate ${rate}`)
    return (
        <ElectedCardWrapper
            isRightChoice={isRightChoice}
            rate={rate}
            index={index.toString()}
            setFocus={setFocus}
        >
            <Card
                type={{ t: "Elected", index } as placeholderCardType}
                front={setElectedFrontCard(player, card, index)}
                size="small"
                isFocus={focus}
            />
        </ElectedCardWrapper>
    );
};

export default ElectedCard;
