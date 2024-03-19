import React from "react";
import style from "./WatingRoom.module.css";
import { Player } from "../../../models/types/player";
import RivalPlayerProfile from "../RivalPlayerProfile";
import { WatingRoomProps } from "../../../models/types/props/profile";

const WatingRoom: React.FC<WatingRoomProps> = ({ rivalPlayers }) => {
    return (
        <section className={style.watingRoom}>
            <div>In the room</div>
            <section className={style.watingRoomRivals}>
                {rivalPlayers.map((player: Player, i: number) => {
                    return <RivalPlayerProfile key={i} player={player} />;
                })}
            </section>
        </section>
    );
};

export default WatingRoom;
