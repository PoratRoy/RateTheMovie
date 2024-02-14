import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { Player } from "../model/types/player";

export const isRoomInGameRooms = (roomId: string, gameRooms: any): boolean => {
    const isValid = Object.keys(gameRooms).find((id) => gameRooms[id] === roomId);
    return isValid ? true : false;
};

export const getPlayerIdFromSocketID = (playerId: string, players: Player[]) => {
    return players.find((player: Player) => player.id === playerId)?.id;
};

export const sendMessage = (
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    name: string,
    players: string[],
    payload?: Object,
) => {
    console.info("Emitting event: " + name + " to", players);
    players.forEach((id) => (payload ? io.to(id).emit(name, payload) : io.to(id).emit(name)));
};
