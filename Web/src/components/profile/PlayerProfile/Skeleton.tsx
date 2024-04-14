import React from "react";
import style from "./PlayerProfile.module.css";
import Avatar from "../Avatar";

const Skeleton: React.FC = () => {
    return (
        <section className={style.PlayerProfile}>
            <div className={style.PlayerProfileAvatar}>
                <Avatar avatar={undefined} />
            </div>
            <div className={style.PlayerProfileDetailsSkeleton}>
                <div className={style.PlayerProfileScoreSkeleton} />
                <div className={style.PlayerProfileNameSkeleton} />
            </div>
        </section>
    );
};

export default Skeleton;
