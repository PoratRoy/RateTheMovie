import React, { useEffect } from "react";
import { CardEventLayoutProps } from "../../../models/types/props";
import useCardEvent from "../../../hooks/useCardEvents";

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
