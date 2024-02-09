import { Socket } from "socket.io-client";
import { Player } from "../../../../Common/model/player";

export type MultiplayerState = {
    socket: Socket | undefined;
    room: string | undefined;
    players: Player[];
};
