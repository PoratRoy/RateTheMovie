import React from "react";
import style from "./WaitingRoom.module.css";
import { Player } from "../../../models/types/player";
import RivalPlayerProfile from "../../profile/RivalPlayerProfile";
import { WaitingRoomProps } from "../../../models/types/props/profile";
import OutOf from "../../common/OutOf";

const WaitingRoom: React.FC<WaitingRoomProps> = ({ rivalPlayers }) => {
    //TODO: allow only 5 players to join the room
    return (
        <section className={style.waitingRoom}>
            <div className={style.waitingRoomTitle}>
                Rival players <OutOf current={rivalPlayers.length} total={5} />
            </div>
            <section className={style.waitingRoomRivals}>
                {rivalPlayers.map((player: Player, i: number) => {
                    return <RivalPlayerProfile key={i} player={player} />;
                })}
            </section>
        </section>
    );
};

export default WaitingRoom;
