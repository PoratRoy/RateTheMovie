import React from "react";
import { useSocketContext } from "../../../context/SocketContext";
import { AvatarImgs } from "../../../models/resources/avatars";
import style from "./RivalsProfiles.module.css";
import Avatar from "../Avatar";

const RivalsProfiles: React.FC = () => {
    const { rivalPlayers } = useSocketContext();
    return (
        <section className={style.rivalsProfiles}>
            {rivalPlayers.map((player, index) => {
                return (
                    <span key={index} className={style.rivalProfile}>
                        <Avatar img={AvatarImgs[player.avatar]} />
                    </span>
                );
            })}
        </section>
    );
};

export default RivalsProfiles;
