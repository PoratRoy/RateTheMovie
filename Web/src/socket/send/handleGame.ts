import { Socket } from "socket.io-client";
import { Game } from "../../models/types/game";

const socketHandleGame = (socket: Socket<any, any>) => {
    return (game: Game) => {
        socket.emit("UpdateGame", game);
    };
};

export default socketHandleGame;
