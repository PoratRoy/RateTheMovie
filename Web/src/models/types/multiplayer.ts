import { Socket } from "socket.io-client";
import { WarRoomProps } from "./warRoom";

export type MultiplayerState = {
    socket: Socket | undefined;
    warRoom: WarRoomProps | undefined;
};