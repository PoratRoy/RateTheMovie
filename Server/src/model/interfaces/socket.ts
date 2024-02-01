import { Socket } from "socket.io";

export interface ISocket {
    handleConnection(socket: Socket): void;
    middlewareImplementation?(soccket: Socket, next: any): void;
}
