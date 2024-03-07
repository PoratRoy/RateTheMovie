import { Card } from "./card";
import { Game } from "./game";
import { RivalPlayer } from "./player";

export type WarRooms = {
    [key: string]: WarRoomProps;
};

export type WarRoomProps = {
    players: RivalPlayer[];
    gameCards: Card[];
    game?: Game;
};

export type WarRoomDetails = {
    numberOfPlayers: number;
    roomId?: string;
};
