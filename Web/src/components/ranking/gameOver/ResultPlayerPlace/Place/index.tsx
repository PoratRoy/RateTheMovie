import React, { useMemo } from "react";
import style from "./Place.module.css";
import { PlaceProps } from "../../../../../models/types/props/ranking";
import { useGamePlayContext } from "../../../../../context/GamePlayContext";
import {
    BRONZE_COLOR,
    BRONZE_COLOR_OPACITY,
    GOLD_COLOR,
    GOLD_COLOR_OPACITY,
    PRIMARY_COLOR,
    SILVER_COLOR,
    SILVER_COLOR_OPACITY,
} from "../../../../../style/root";

const Place: React.FC<PlaceProps> = ({ children, place, playerId }) => {
    const { currentPlayer } = useGamePlayContext();

    const isCurrentPlayer = useMemo(() => {
        return currentPlayer?.id === playerId;
    }, []);

    const isTopThree = useMemo(() => {
        return place <= 3 ? true : false;
    }, []);

    const color = useMemo(() => {
        return place === 1
            ? GOLD_COLOR
            : place === 2
              ? SILVER_COLOR
              : place === 3
                ? BRONZE_COLOR
                : "transparent";
    }, []);

    const title = useMemo(() => {
        return place === 1
            ? "Round Winner"
            : place === 2
              ? "Second Place"
              : place === 3
                ? "Third Place"
                : "";
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

    const className = isTopThree ? style.placeTopThree : style.placeNormal; //TODOCSS: refactor this

    return (
        <section className={style.placeContainer}>
            {isTopThree ? (
                <div style={{ color }} className={className}>
                    {title}
                </div>
            ) : null}
            <section
                style={{
                    boxShadow: isCurrentPlayer ? `0px 0px 10px 3px ${PRIMARY_COLOR}` : "none",
                    border: `3px solid ${color}`,
                    backgroundColor,
                }}
                className={style.placeBorder}
            >
                {children}
            </section>
        </section>
    );
};

export default Place;
