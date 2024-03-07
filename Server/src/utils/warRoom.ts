import { Player } from "../model/types/player";
import { WarRoomDetails, WarRoomProps, WarRooms } from "../model/types/warRoom";

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

export const initWarRoomDetails = (roomId?: string) => {
    if(roomId){
        return { numberOfPlayers: 0, numberOfFinishedPlayers: 0, roomId } as WarRoomDetails;
    }
    return { numberOfPlayers: 0, numberOfFinishedPlayers: 0 } as WarRoomDetails;
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
