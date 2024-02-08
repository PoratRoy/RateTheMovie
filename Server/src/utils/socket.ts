import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { Player } from "../model/types/player";

export const getUidFromSocketID = (
    id: string,
    users: Player,
) => {
    return Object.keys(users).find((uid) => users[uid] === id);
};

export const sendMessage = (
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    name: string,
    users: string[],
    payload?: Object,
) => {
    console.info("Emitting event: " + name + " to", users);
    users.forEach((id) => (payload ? io.to(id).emit(name, payload) : io.to(id).emit(name)));
};
