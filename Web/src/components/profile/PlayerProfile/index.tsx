import React from "react";
import Avater from "../Avater";
import { AvaterImgs } from "../../../models/resources/avaters";
import style from "./PlayerProfile.module.css";
import { PlayerProfileProps } from "../../../models/types/props/profile";
import Skeleton from "./Skeleton";
import { formatShortNumber } from "../../../utils/format";

const PlayerProfile: React.FC<PlayerProfileProps> = ({ currentPlayer }) => {
    const Profile = (): React.ReactNode => {
        if (currentPlayer) {
            const { avater, score, name } = currentPlayer;
            return (
                <section className={style.PlayerProfile}>
                    <div className={style.PlayerProfileAvater}>
                        <Avater img={AvaterImgs[avater]} />
                    </div>
                    <div className={style.PlayerProfileDetails}>
                        <div className={style.PlayerProfileScore}>{formatShortNumber(score)}</div>
                        <div className={style.PlayerProfileName}>{name}</div>
                    </div>
                </section>
            );
        } else {
            <Skeleton />;
        }
    };

    return Profile();
};

export default PlayerProfile;
