import React, { useEffect } from "react";
import useCardEvent from "../../../hooks/gameplay/useCardEvents";
import { CardEventLayoutProps } from "../../../models/types/props/layout";
import usePlaceCard from "../../../hooks/gameplay/usePlaceCard";

const CardEventLayout: React.FC<CardEventLayoutProps> = ({ children, card, setOpenShadow }) => {
    const { isClicked, isDoubleClick, handleMouseDown } = useCardEvent();
    const { handlePlaceCard } = usePlaceCard();

    //TODO:
    // useEffect(() => {
    //     if (isDoubleClick) {
    //         //TODO: set in the elected card
    //         setOpenShadow(false);
    //     }
    // }, [isDoubleClick]);

    useEffect(() => {
        // setOpenShadow(isClicked);
        if (isClicked && card) handlePlaceCard(card);
    }, [isClicked]);

    return <div onMouseDown={handleMouseDown}>{children}</div>;
};

export default CardEventLayout;
