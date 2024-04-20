import React, { useEffect, useState } from "react";
import { useSocketContext } from "../../../context/SocketContext";
import { Avatars } from "../../../models/resources/avatars";
import style from "./RivalsProfiles.module.css";
import Avatar from "../Avatar";
import { Player } from "../../../models/types/player";

const RivalsProfiles: React.FC = () => {
    const [otherPlayers, setOtherPlayers] = useState<Player[]>([]);
    const [morePlayers, setMorePlayers] = useState<number>(0);
    const { rivalPlayers } = useSocketContext();

    useEffect(() => {
        if(rivalPlayers){
            if (rivalPlayers.length > 3) {
                setOtherPlayers(rivalPlayers.slice(0, 3));
                setMorePlayers(rivalPlayers.length - 3);
            } else {
                setOtherPlayers(rivalPlayers);
                setMorePlayers(0);
            }
        }
    },[rivalPlayers])

    return (
        <section className={style.rivalsProfiles}>
            {morePlayers > 0 ? (
                <span className={style.moreRivals}>
                    <span>{morePlayers}+</span>
                </span>
            ) : null}
            {otherPlayers?.map((player, index) => {
                return (
                    <span key={index} className={style.rivalProfile}>
                        <Avatar avatar={Avatars[player.avatar]} />
                    </span>
                );
            })}
        </section>
    );
};

export default RivalsProfiles;
