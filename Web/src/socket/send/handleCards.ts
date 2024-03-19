import { Socket } from "socket.io-client";
import { Card } from "../../models/types/card";

const socketHandleCards = (socket: Socket<any, any>) => {
    return (cards: Card[]) => {
        console.log("Emit cards: ", cards);
        socket.emit("UpdateGameCards", cards);
    };
};

export default socketHandleCards;
