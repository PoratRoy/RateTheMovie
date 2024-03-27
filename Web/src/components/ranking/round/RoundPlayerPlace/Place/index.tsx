import React, { useMemo } from "react";
import style from "./Place.module.css";
import { PlaceProps } from "../../../../../models/types/props/ranking";
import {
    BRONZE_COLOR,
    BRONZE_COLOR_OPACITY,
    GOLD_COLOR,
    GOLD_COLOR_OPACITY,
    PRIMARY_COLOR,
    SILVER_COLOR,
    SILVER_COLOR_OPACITY,
    TEXT_COLOR_OPACITY_REAL,
} from "../../../../../style/root";
import { useGamePlayContext } from "../../../../../context/GamePlayContext";

const Place: React.FC<PlaceProps> = ({ children, place, players }) => {
    const { currentPlayer } = useGamePlayContext();

    const isCurrentPlayer = useMemo(() => {
        const found = players?.find((player) => player.id === currentPlayer?.id);
        return found ? true : false;
    }, []);

    const border = useMemo(() => {
        return place === 1
            ? GOLD_COLOR
            : place === 2
              ? SILVER_COLOR
              : place === 3
                ? BRONZE_COLOR
                : TEXT_COLOR_OPACITY_REAL;
    }, []);

    const backgroundColor = useMemo(() => {
        return place === 1
            ? GOLD_COLOR_OPACITY
            : place === 2
              ? SILVER_COLOR_OPACITY
              : place === 3
                ? BRONZE_COLOR_OPACITY
                : "none";
    }, []);

    return (
        <div
            className={style.rankingPlayerTab}
            style={{
                boxShadow: isCurrentPlayer ? `0px 0px 10px 3px ${PRIMARY_COLOR}` : "none",
                border: `3px solid ${border}`,
                transition: "gap 0.3s linear",
                backgroundColor,
            }}
        >
            {children}
        </div>
    );
};

export default Place;
