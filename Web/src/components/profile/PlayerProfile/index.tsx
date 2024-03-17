import React from "react";
import { AvatarImgs } from "../../../models/resources/avatars";
import style from "./PlayerProfile.module.css";
import { PlayerProfileProps } from "../../../models/types/props/profile";
import Skeleton from "./Skeleton";
import Avatar from "../Avatar";
import Score from "../../actions/score/Score";

const PlayerProfile: React.FC<PlayerProfileProps> = ({ currentPlayer }) => {
    const Profile = (): React.ReactNode => {
        if (currentPlayer) {
            const { avatar, name } = currentPlayer;
            return (
                <section className={style.PlayerProfile}>
                    <div className={style.PlayerProfileAvatar}>
                        <Avatar img={AvatarImgs[avatar]} />
                    </div>
                    <div className={style.PlayerProfileDetails}>
                        <Score/>
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
