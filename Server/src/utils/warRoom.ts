import { Socket } from "socket.io";
import { Player } from "../model/types/player";
import { WarRoomDetails, WarRoomProps, WarRooms } from "../model/types/warRoom";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export const getRoomByPlayer = (warRooms: WarRooms, connection: string) => {
    let player: Player | undefined;
    const warRoom = Object.values(warRooms).find((room) =>
        room.players.find((p: Player) => {
            if (p.connection === connection) {
                player = p;
                return p;
            }
        }),
    );
    return { warRoom, player };
};

export const setWarRoomDetails = (warRoom: WarRoomProps, roomId: string) => {
    const numberOfPlayers = warRoom.players.length;
    const numberOfFinishedPlayers = checkNumberOfFinishedPlayers(warRoom.players);
    return { numberOfPlayers, numberOfFinishedPlayers, roomId } as WarRoomDetails;
};

export const checkIfAllPlayersFinished = (warRoom: WarRoomProps) => {
    return warRoom.players.every((player) => player.electedCards.order.length > 0);
};

export const checkNumberOfFinishedPlayers = (players: Player[]) => {
    return players.filter((player) => player.electedCards.order.length > 0).length;
};

export const getPlayerWarRoomInfo = (
    socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    warRooms: WarRooms,
) => {
    const connection = socket.id;
    const { warRoom, player } = getRoomByPlayer(warRooms, connection);
    return { warRoom, player };
};