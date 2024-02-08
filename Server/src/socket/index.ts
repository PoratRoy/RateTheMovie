import { Server as SocketServer, Socket } from "socket.io";
import { InitSocket } from "../model/types/socket";
import { Server as HttpServer } from 'http';

const WEBSOCKET_CORS = {
    origin: "*",
    methods: ["GET", "POST"],
};

class Websocket extends SocketServer {
    private static instance: Websocket;

    constructor(httpServer: HttpServer) {
        super(httpServer, {  
            serveClient: false,
            pingInterval: 10000,
            pingTimeout: 5000,
            cookie: false,
            cors: WEBSOCKET_CORS,
        });
    }

    public static getInstance(httpServer?: any): Websocket {
        if (!Websocket.instance) {
            Websocket.instance = new Websocket(httpServer);
        }

        return Websocket.instance;
    }

    public initializeHandlers(socketHandlers: Array<InitSocket>) {
        socketHandlers.forEach((element) => {
            let namespace = Websocket.instance.of(element.path, (socket: Socket) => {
                element.handler.handleConnection(socket);
            });

            if (element.handler.middlewareImplementation) {
                namespace.use(element.handler.middlewareImplementation);
            }
        });
    }
}

export default Websocket;
