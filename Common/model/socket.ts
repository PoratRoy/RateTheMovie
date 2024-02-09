import { Player } from './player';
import { Movie } from './movie';

export type SocketProps = {
    room: string | undefined;
    players: Player[];   
    movies?: Movie[];
    correctMovies?: string[];
}