import { Socket } from "socket.io-client";

const socketHandleStartGame = (socket: Socket<any, any>) => {
    return () => {
        socket.emit("StartGame");
    };
};

export default socketHandleStartGame;
