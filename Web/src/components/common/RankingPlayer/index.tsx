import React from "react";
import style from "./RankingPlayer.module.css";
import PlayerProfile from "../../profile/PlayerProfile";
import ToggelArrow from "../../actions/widgets/ToggelArrow";
import Pack from "../../cards/core/Pack";
import { RankingPlayerProps } from "../../../models/types/props/ranking";
import useToggle from "../../../hooks/global/useToggle";
import ResultCard from "../../cards/single/ResultCard";
import { Card } from "../../../models/types/card";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { tweenAnimation } from "../../../style/animation";

const RankingPlayer: React.FC<RankingPlayerProps> = ({ index, player }) => {
    const [isOpen, toggle] = useToggle(false);

    return (
        <div className={style.rankingPlayerTab}>
            <div className={style.rankingPlayerTabTop}>
                <span className={style.rankingNumber}>{index + 1}</span>
                <PlayerProfile currentPlayer={player} />
                <ToggelArrow isOpen={isOpen} handleOnClick={toggle} />
            </div>

            <LazyMotion features={domAnimation} strict>
                <div aria-expanded={isOpen} data-timeout="auto">
                    <m.div
                        style={{ overflow: "hidden" }}
                        initial={{ height: 0, opacity: 1 }}
                        animate={tweenAnimation(isOpen)}
                        exit={{ height: 0, opacity: 1 }}
                    >
                        <Pack packDisplay="small">
                            {player.electedCards.order.map(
                                (card: Card | undefined, index: number) => (
                                    <React.Fragment key={index}>
                                        <ResultCard player={player} card={card} index={index} />
                                    </React.Fragment>
                                ),
                            )}
                        </Pack>
                    </m.div>
                </div>
            </LazyMotion>
        </div>
    );
};

export default RankingPlayer;
