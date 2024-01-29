import React, { useState } from "react";
import { placeholderCardType } from "../../../../models/types/card";
import Card from "../../core/Card";
import ElectedCardWrapper from "../../wrapper/ElectedCardWrapper";
import { ElectedCardProps } from "../../../../models/types/props";
import { setElectedFrontCard } from "../../../../utils/card";

const ElectedCard: React.FC<ElectedCardProps> = ({ player, index, card }) => {
    const [focus, setFocus] = useState<boolean>(false);

    return (
        <ElectedCardWrapper rate={card?.rate || 0} index={index.toString()} setFocus={setFocus}>
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
