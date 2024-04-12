import { RoomStatus } from "../enum/game";
import { Card } from "./card";
import { Game } from "./game";
import { Player } from "./player";

export type WarRoomProps = {
    players: Player[];
    gameCards: Card[];
    game?: Game;
};

export type WarRooms = {
    [key: string]: WarRoomProps;
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
