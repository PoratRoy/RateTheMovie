import { Card } from "./card";
import { MovieFilters } from "./movie";
import { Player } from "./player";

export type GameRoomProps = {
    room: string | undefined;
    players: Player[];
    gameCards: Card[];
    filters: MovieFilters;
};

export type GameRooms = {
    [key: string]: GameRoomProps;
};