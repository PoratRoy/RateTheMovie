import React, { useMemo } from "react";
import style from "./RoundPlayerPlace.module.css";
import PlayerProfile from "../../../profile/PlayerProfile";
import { PACK_CARDS_NUM } from "../../../../models/constant";
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

    return (
        <section className={style.playerPlace}>
            <div className={style.rankingPlayerTabTop}>
                <PlayerProfile currentPlayer={player} />
                <span className={style.rankingNumber} style={{ color }}>
                    {place}
                </span>
            </div>

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
                            <ResultCard player={player} card={card} index={index} size="Xsmall" />
                        </React.Fragment>
                    ))}
                </Pack>
            )}
        </section>
    );
};

export default PlayerPlace;
