import { Player } from "../model/types/player";
import { WarRoomProps, WarRooms } from "../model/types/warRoom";

export const getRoomByPlayer = (warRooms: WarRooms, playerId: string) => {
    let player: Player | undefined;
    const warRoom = Object.values(warRooms).find((room) =>
        room.players.find((p: Player) => {
            if (p.id === playerId) {
                player = p;
                return p;
            }
        }),
    );
    return { warRoom, player };
};

export const initWarRoom = () => {
    return {
        players: [],
        gameCards: [],
        game: undefined,
    } as WarRoomProps;
};

