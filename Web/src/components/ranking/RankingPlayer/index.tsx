import React, { useEffect, useState } from "react";
import style from "./RankingPlayer.module.css";
import PlayerProfile from "../../profile/PlayerProfile";
import ToggelArrow from "../../actions/widgets/ToggelArrow";
import Pack from "../../cards/core/Pack";
import { RankingPlayerProps } from "../../../models/types/props/ranking";
import useToggle from "../../../hooks/global/useToggle";
import ResultCard from "../../cards/single/ResultCard";
import { Card } from "../../../models/types/card";
import Collapse from "../../actions/Collapse";

const RankingPlayer: React.FC<RankingPlayerProps> = ({ place, player }) => {
    const [isOpen, toggle] = useToggle(false);
    const [color, setColor] = useState<string>("red");

    const isTopThree = place <= 3 ? true : false;

    useEffect(() => {
        if (place === 1) {
            setColor("gold");
        } else if (place === 2) {
            setColor("silver");
        } else if (place === 3) {
            setColor("brown");
        }
    }, []);

    return (
        <div
            className={style.rankingPlayerTab}
            style={{
                border: isTopThree ? `3px solid ${color}` : "none",
                gap: isOpen ? "1rem" : "0",
                transition: "gap 0.3s linear",
            }}
        >
            <div className={style.rankingPlayerTabTop}>
                <span className={style.rankingNumber}>{place}</span>
                <PlayerProfile currentPlayer={player} />
                <ToggelArrow
                    isOpen={isOpen}
                    handleOnClick={toggle}
                    startDirection="right"
                    endDirection="down"
                    size="small"
                />
            </div>

            <Collapse isOpen={isOpen}>
                <Pack packDisplay="Xsmall">
                    {player.electedCards.order.map((card: Card | undefined, index: number) => (
                        <React.Fragment key={index}>
                            <ResultCard player={player} card={card} index={index} size="Xsmall" />
                        </React.Fragment>
                    ))}
                </Pack>
            </Collapse>
        </div>
    );
};

export default RankingPlayer;
