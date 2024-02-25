import { Card } from "./card";
import { Game } from "./game";
import { Player } from "./player";

export type WarRoomProps = {
    players: Player[];
    gameCards: Card[];//TODO: maybe I only need the movies
    game: Game;
};

export type WarRooms = {
    [key: string]: WarRoomProps;
};

export type WarRoomDetails = {
    numberOfPlayers: number;
    roomId?: string;
}