import React from "react";
import Avater from "../Avater";
import { AvaterImgs } from "../../../models/resources/avaters";
import style from "./PlayerProfile.module.css";
import { PlayerProfileProps } from "../../../models/types/props/profile";

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
                        <div className={style.PlayerProfileScore}>{score}</div>
                        <div className={style.PlayerProfileName}>{name}</div>
                    </div>
                </section>
            );
        } else {
            return (
                <section className={style.PlayerProfile}>
                    <div className={style.PlayerProfileAvater}>
                        <Avater img={undefined} />
                    </div>
                    <div className={style.PlayerProfileDetailsSkeleton}>
                        <div className={style.PlayerProfileScoreSkeleton}/>
                        <div className={style.PlayerProfileNameSkeleton}/>
                    </div>
                </section>
            );
        }
    };

    return Profile();
};

export default PlayerProfile;
