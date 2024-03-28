import React from "react";
import style from "./WatingRoom.module.css";
import { Player } from "../../../models/types/player";
import RivalPlayerProfile from "../RivalPlayerProfile";
import { WatingRoomProps } from "../../../models/types/props/profile";
import OutOf from "../../common/OutOf";

const WatingRoom: React.FC<WatingRoomProps> = ({ rivalPlayers }) => {
    //TODO: allow only 5 players to join the room
    return (
        <section className={style.watingRoom}>
            <div className={style.watingRoomTitle}>
                Rival players <OutOf current={rivalPlayers.length} total={5} />
            </div>
            <section className={style.watingRoomRivals}>
                {rivalPlayers.map((player: Player, i: number) => {
                    return <RivalPlayerProfile key={i} player={player} />;
                })}
            </section>
        </section>
    );
};

export default WatingRoom;
