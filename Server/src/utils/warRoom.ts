import { Player } from "../model/types/player";
import { WarRoomProps, WarRooms } from "../model/types/warRoom";

export const getRoomByPlayer = (warRooms: WarRooms, playerId: string) => {
    const warRoom = Object.values(warRooms).find((room) =>
        room.players.find((player) => player.id === playerId),
    );
    return warRoom;
};

export const initWarRoom = (roomId: string, player: Player) => {
    return {
        players: [player],
        gameCards: [],
        game: undefined,
    } as WarRoomProps;
};

export const getRoomPlayer = (warRoom: WarRoomProps, playerId: string) => {
    return warRoom.players.find((player) => player.id === playerId);
};
