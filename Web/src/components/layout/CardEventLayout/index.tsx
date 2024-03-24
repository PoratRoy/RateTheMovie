import React, { useEffect, useState } from "react";
import useCardEvent from "../../../hooks/gameplay/useCardEvents";
import { CardEventLayoutProps } from "../../../models/types/props/layout";
import CardView from "../../view/CardView";

const CardEventLayout: React.FC<CardEventLayoutProps> = ({ children, movie, setOpenShadow }) => {
    const [openCardView, setOpenCardView] = useState<boolean>(false);
    const { isClicked, isDoubleClick, handleMouseDown } = useCardEvent();

    useEffect(() => {
        if (isDoubleClick) {
            setOpenCardView(true);
            setOpenShadow(false);
        }
    }, [isDoubleClick, setOpenCardView]);

    useEffect(() => {
        setOpenShadow(isClicked);
    }, [isClicked]);

    return (
        <div onMouseDown={handleMouseDown}>
            {children}
            {openCardView ? <CardView movie={movie} close={() => setOpenCardView(false)} /> : null}
        </div>
    );
};

export default CardEventLayout;
