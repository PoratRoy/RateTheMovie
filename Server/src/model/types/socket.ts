import { ISocket } from "../interfaces/socket";

export type InitSocket = {
    path: string;
    handler: ISocket;
};
