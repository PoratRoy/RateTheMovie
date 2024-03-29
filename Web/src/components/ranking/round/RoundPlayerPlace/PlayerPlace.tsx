import React, { useMemo } from "react";
import style from "./RoundPlayerPlace.module.css";
import PlayerProfile from "../../../profile/PlayerProfile";
import ToggleArrow from "../../../actions/widgets/toggle/ToggleArrow";
import Collapse from "../../../actions/widgets/Collapse";
import { PACK_CARDS_NUM } from "../../../../models/constant";
import { motion } from "framer-motion";
import {
    BRONZE_COLOR,
    GOLD_COLOR,
    SILVER_COLOR,
    TEXT_COLOR,
    X_SMALL_CARD_WIDTH,
} from "../../../../style/root";
import Pack from "../../../cards/core/Pack";
import ResultCard from "../../../cards/single/ResultCard";
import { Card } from "../../../../models/types/card";
import { PlayerPlaceProps } from "../../../../models/types/props/ranking";
import useToggle from "../../../../hooks/global/useToggle";

const PlayerPlace: React.FC<PlayerPlaceProps> = ({ place, player }) => {
    const [isOpen, toggle] = useToggle(true);

    const color = useMemo(() => {
        return place === 1
            ? GOLD_COLOR
            : place === 2
              ? SILVER_COLOR
              : place === 3
                ? BRONZE_COLOR
                : TEXT_COLOR;
    }, []);

    const Br = (height: string) => (
        <motion.div
            initial={{ height }}
            animate={{ height: isOpen ? height : "0" }}
            transition={{ duration: 0.05, ease: "linear" }}
        />
    );

    return (
        <React.Fragment>
            <div className={style.rankingPlayerTabTop}>
                <PlayerProfile currentPlayer={player} />
                <ToggleArrow
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
            {Br("10px")}

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
            {Br("10px")}
        </React.Fragment>
    );
};

export default PlayerPlace;
