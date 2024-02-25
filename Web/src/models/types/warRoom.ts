import { Card } from "./card";
import { MovieFilters } from "./filter";
import { Player } from "./player";

export type WarRooms = {
    [key: string]: WarRoomProps;
};

export type WarRoomProps = {
    room: string | undefined;
    players: Player[];
    gameCards: Card[];
    filters: MovieFilters;
};

export type WarRoomDetails = {
    numberOfPlayers: number;
    roomId?: string;
};
