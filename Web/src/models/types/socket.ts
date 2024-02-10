import { Socket } from "socket.io-client";
import { Movie } from "./movie";
import { Player } from "./player";

export type MultiplayerState = {
    socket: Socket | undefined;
    room: string | undefined;
    players: Player[];
};

export type SocketProps = {
    room: string | undefined;
    players: Player[];
    movies?: Movie[];
    correctMovies?: string[];
};
