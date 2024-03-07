import { Card } from "./card";
import { Game } from "./game";
import { RivalPlayer } from "./player";

export type WarRoomProps = {
    players: RivalPlayer[];
    gameCards: Card[];//TODO: maybe I only need the movies
    game?: Game;
};

export type WarRooms = {
    [key: string]: WarRoomProps;
};

export type WarRoomDetails = {
    numberOfPlayers: number;
    roomId?: string;
}