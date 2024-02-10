import { ISocket } from "../interfaces/socket";
import { Movie } from "./movie";
import { Player } from "./player";

export type InitSocket = {
    path: string;
    handler: ISocket;
};

export type SocketProps = {
    room: string | undefined;
    players: Player[];
    movies?: Movie[];
    correctMovies?: string[];
};
