import React from "react";
import { useSocketContext } from "../../../context/SocketContext";
import { AvaterImgs } from "../../../models/resources/avaters";
import Avater from "../Avater";
import style from "./RivalsProfiles.module.css";

const RivalsProfiles: React.FC = () => {
    const { rivalPlayers } = useSocketContext();
    return (
        <section className={style.rivalsProfiles}>
            {rivalPlayers.map((player, index) => {
                return (
                    <span key={index} className={style.rivalProfile}>
                        <Avater img={AvaterImgs[player.avater]} />
                    </span>
                );
            })}
        </section>
    );
};

export default RivalsProfiles;
