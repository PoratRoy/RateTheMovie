import React from "react";
import Avater from "../Avater";
import { AvaterImgs } from "../../../models/avaters";
import style from "./PlayerProfile.module.css";
import { PlayerProfileProps } from "../../../models/types/props";

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
            return <div>TODO: skeleton profile</div>;
        }
    };

    return Profile();
};

export default PlayerProfile;
