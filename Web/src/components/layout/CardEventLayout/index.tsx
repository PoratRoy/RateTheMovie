import React from "react";
import { CardEventLayoutProps } from "../../../models/types/props/layout";
import usePlaceCard from "../../../hooks/gameplay/usePlaceCard";
import { useDragContext } from "../../../context/DndContext";

const CardEventLayout: React.FC<CardEventLayoutProps> = ({ children, card, setOpenShadow }) => {
    // const { isClicked, isDoubleClick } = useCardEvent();
    const { isDragging } = useDragContext();
    const { handlePlaceCard } = usePlaceCard();

    //TODO:
    // useEffect(() => {
    //     if (isDoubleClick) {
    //         //TODO: set in the elected card
    //         setOpenShadow(false);
    //     }
    // }, [isDoubleClick]);

    // useEffect(() => {
    //     // setOpenShadow(isClicked);
    //     console.log("1")
    // }, [isClicked]);

    const handleOnClick = () => {
        if (!isDragging && card) handlePlaceCard(card);
    };

    return <div onClick={handleOnClick}>{children}</div>;
};

export default CardEventLayout;
