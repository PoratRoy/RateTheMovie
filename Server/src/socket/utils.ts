import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { getRoomByPlayer } from "../utils/warRoom";
import { WarRooms } from "../model/types/warRoom";

export const getPlayerWarRoomInfo = (
    socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    warRooms: WarRooms,
) => {
    const playerId = socket.id;
    const { warRoom, player } = getRoomByPlayer(warRooms, playerId);
    return { warRoom, player };
};
