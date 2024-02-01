import { Server as SocketServer, Socket } from "socket.io";
import { InitSocket } from "../model/types/socket";

const WEBSOCKET_CORS = {
    origin: "*",
    methods: ["GET", "POST"],
};

class Websocket extends SocketServer {
    private static io: Websocket;

    constructor(httpServer: any) {
        super(httpServer, {
            cors: WEBSOCKET_CORS,
        });
    }

    public static getInstance(httpServer?: any): Websocket {
        if (!Websocket.io) {
            Websocket.io = new Websocket(httpServer);
        }

        return Websocket.io;
    }

    public initializeHandlers(socketHandlers: Array<InitSocket>) {
        socketHandlers.forEach((element) => {
            let namespace = Websocket.io.of(element.path, (socket: Socket) => {
                element.handler.handleConnection(socket);
            });

            if (element.handler.middlewareImplementation) {
                namespace.use(element.handler.middlewareImplementation);
            }
        });
    }
}

export default Websocket;
