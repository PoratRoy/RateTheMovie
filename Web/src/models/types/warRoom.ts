import { RoomStatus } from "../enums/game";
import { Card } from "./card";
import { Game } from "./game";
import { Player } from "./player";

export type WarRooms = {
    [key: string]: WarRoomProps;
};

export type WarRoomProps = {
    players: Player[];
    gameCards: Card[];
    game?: Game;
};

export type WarRoomDetails = {
    numberOfPlayers: number;
    numberOfFinishedPlayers: number;
    roomId?: string;
};

export type WarRoomStatus = {
    status: RoomStatus;
    details?: WarRoomDetails;
};