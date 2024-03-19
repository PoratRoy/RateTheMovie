import { Socket } from "socket.io-client";
import { WarRoomDetails } from "../../models/types/warRoom";

const socketHandlePlayerWantToJoin = (socket: Socket<any, any>) => {
    return (roomId: string | undefined, callback: (details: WarRoomDetails) => void) => {
        socket.emit("PlayerWantToJoin", roomId, async (details: WarRoomDetails) => {
            callback(details);
        });
    };
};

export default socketHandlePlayerWantToJoin;
