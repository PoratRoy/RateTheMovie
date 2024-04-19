import React, { useMemo } from "react";
import style from "./RoundPlayerPlace.module.css";
import PlayerProfile from "../../../profile/PlayerProfile";
import {
    BRONZE_COLOR,
    GOLD_COLOR,
    SILVER_COLOR,
    TEXT_COLOR,
} from "../../../../style/root";
import Pack from "../../../cards/core/Pack";
import ResultCard from "../../../cards/single/ResultCard";
import { Card } from "../../../../models/types/card";
import { PlayerPlaceProps } from "../../../../models/types/props/ranking";
import { checkAllCardsExist } from "../../../../utils/correctOrder";
import NoCardsSelected from "./NoCardsSelected";

const PlayerPlace: React.FC<PlayerPlaceProps> = ({ place, player }) => {
    const color = useMemo(() => {
        return place === 1
            ? GOLD_COLOR
            : place === 2
              ? SILVER_COLOR
              : place === 3
                ? BRONZE_COLOR
                : TEXT_COLOR;
    }, []);

    const isAllExist = useMemo(() => {
        return checkAllCardsExist(player.electedCards.order);
    }, [player.electedCards.order]);

    return (
        <section className={style.playerPlace}>
            <div className={style.rankingPlayerTabTop}>
                <PlayerProfile currentPlayer={player} />
                <span className={style.rankingNumber} style={{ color }}>
                    {place}
                </span>
            </div>

            {isAllExist ? (
                <Pack packDisplay="Xsmall">
                    {player.electedCards.order.map((card: Card | undefined, index: number) => (
                        <React.Fragment key={index}>
                            <ResultCard player={player} card={card} index={index} size="Xsmall" />
                        </React.Fragment>
                    ))}
                </Pack>
            ) : (
                <NoCardsSelected />
            )}
        </section>
    );
};

export default PlayerPlace;
