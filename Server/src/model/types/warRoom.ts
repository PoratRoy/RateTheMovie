import { Card } from "./card";
import { MovieFilters } from "./movie";
import { Player } from "./player";

export type WarRoomProps = {
    room: string | undefined;
    players: Player[];
    gameCards: Card[];
    filters: MovieFilters;
};

export type WarRooms = {
    [key: string]: WarRoomProps;
};

export type WarRoomDetails = {
    numberOfPlayers: number;
    roomId?: string;
}