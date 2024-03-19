import { Socket } from "socket.io-client";
import { WarRoomDetails } from "../../models/types/warRoom";

const socketHandleCreateNewRoom = (socket: Socket<any, any>) => {
    return (callback: (details: WarRoomDetails) => void) => {
        socket.emit("CreateNewRoom", async (details: WarRoomDetails) => {
            if (details) {
                callback(details);
            }
        });
    };
};

export default socketHandleCreateNewRoom;
