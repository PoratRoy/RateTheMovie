import { Socket } from "socket.io-client";
import { GameRoomProps } from "./gameRoom";

export type MultiplayerState = {
    socket: Socket | undefined;
    gameRoom: GameRoomProps | undefined;
};