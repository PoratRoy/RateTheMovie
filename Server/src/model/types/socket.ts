import { ISocket } from "../interfaces/socket";
import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export type InitSocket = {
    path: string;
    handler: ISocket;
};

export type SocketConnction = Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
