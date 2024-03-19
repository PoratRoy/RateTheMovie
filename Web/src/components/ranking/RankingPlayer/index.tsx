import React, { useMemo } from "react";
import style from "./RankingPlayer.module.css";
import PlayerProfile from "../../profile/PlayerProfile";
import ToggelArrow from "../../actions/widgets/ToggelArrow";
import Pack from "../../cards/core/Pack";
import { RankingPlayerProps } from "../../../models/types/props/ranking";
import useToggle from "../../../hooks/global/useToggle";
import ResultCard from "../../cards/single/ResultCard";
import { Card } from "../../../models/types/card";
import Collapse from "../../actions/widgets/Collapse";
import {
    BRONZE_COLOR,
    BRONZE_COLOR_OPACITY,
    GOLD_COLOR,
    GOLD_COLOR_OPACITY,
    PRIMARY_COLOR,
    SILVER_COLOR,
    SILVER_COLOR_OPACITY,
    TEXT_COLOR,
    TEXT_COLOR_OPACITY_REAL,
    X_SMALL_CARD_WIDTH,
} from "../../../style/root";
import { PACK_CARDS_NUM } from "../../../models/constant";
import { useGamePlayContext } from "../../../context/GamePlayContext";

const RankingPlayer: React.FC<RankingPlayerProps> = ({ place, player }) => {
    const { currentPlayer } = useGamePlayContext();
    const [isOpen, toggle] = useToggle(true);

    const isCurrentPlayer = useMemo(() => {
        return currentPlayer?.id === player.id;
    }, []);
    
    const color = useMemo(() => {
        return place === 1
            ? GOLD_COLOR
            : place === 2
              ? SILVER_COLOR
              : place === 3
                ? BRONZE_COLOR
                : TEXT_COLOR;
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
                gap: isOpen ? "1rem" : "0",
                transition: "gap 0.3s linear",
                backgroundColor,
            }}
        >
            <div className={style.rankingPlayerTabTop}>
                <PlayerProfile currentPlayer={player} />
                <ToggelArrow
                    isOpen={isOpen}
                    handleOnClick={toggle}
                    startDirection="right"
                    endDirection="down"
                    size="small"
                />
                <span className={style.rankingNumber} style={{ color }}>
                    {place}
                </span>
            </div>

            <Collapse isOpen={isOpen}>
                {player.electedCards.order[0]?.id === undefined ? (
                    <div
                        className={style.rankingNoCards}
                        style={{
                            width: `calc(${(PACK_CARDS_NUM - 1) * 5}px + ${
                                PACK_CARDS_NUM * X_SMALL_CARD_WIDTH
                            }px)`,
                        }}
                    >
                        No cards selected
                    </div>
                ) : (
                    <Pack packDisplay="Xsmall">
                        {player.electedCards.order.map((card: Card | undefined, index: number) => (
                            <React.Fragment key={index}>
                                <ResultCard
                                    player={player}
                                    card={card}
                                    index={index}
                                    size="Xsmall"
                                />
                            </React.Fragment>
                        ))}
                    </Pack>
                )}
            </Collapse>
        </div>
    );
};

export default RankingPlayer;
