import { Card } from "./card";
import { MovieFilters } from "./movie";
import { Player } from "./player";

export type WarRoomProps = {
    room: string | undefined;
    players: Player[];
    gameCards: Card[];//TODO: maybe I only need the movies
    filters: MovieFilters;//TODO: not sure I need this
};

export type WarRooms = {
    [key: string]: WarRoomProps;
};

export type WarRoomDetails = {
    numberOfPlayers: number;
    roomId?: string;
}