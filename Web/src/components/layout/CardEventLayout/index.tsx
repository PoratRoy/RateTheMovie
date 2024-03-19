import React, { useEffect } from "react";
import useCardEvent from "../../../hooks/gameplay/useCardEvents";
import { CardEventLayoutProps } from "../../../models/types/props/layout";

const CardEventLayout: React.FC<CardEventLayoutProps> = ({
    children,
    setOpenCardView,
    setOpenShadow,
}) => {
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

    return <div onMouseDown={handleMouseDown}>{children}</div>;
};

export default CardEventLayout;
