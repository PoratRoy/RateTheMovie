import React from "react";
import style from "./WaitingRoom.module.css";
import { Player } from "../../../models/types/player";
import RivalPlayerProfile from "../../profile/RivalPlayerProfile";
import { WaitingRoomProps } from "../../../models/types/props/profile";
import OutOf from "../../common/OutOf";
import { MAX_PLAYERS } from "../../../models/constant";

const WaitingRoom: React.FC<WaitingRoomProps> = ({ currentPlayer, rivalPlayers }) => {
    return currentPlayer && rivalPlayers ? (
        <section className={style.waitingRoom}>
            <div className={style.waitingRoomTitle}>
                Players in the room: <OutOf current={rivalPlayers.length + 1} total={MAX_PLAYERS} />
            </div>
            <section className={style.waitingRoomRivals}>
                <RivalPlayerProfile player={currentPlayer} isYou />
                {rivalPlayers.map((player: Player, i: number) => {
                    return <RivalPlayerProfile key={i} player={player} />;
                })}
            </section>
        </section>
    ) : null;
};

export default WaitingRoom;
