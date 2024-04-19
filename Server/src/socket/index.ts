import { Server, Socket } from "socket.io";
import { InitSocket } from "../model/types/socket";
import { Server as HttpServer } from "http";

const WEBSOCKET_CORS = {
    origin: [process.env.FE_URL || "https://cusort.com", "http://localhost:3000"],
    methods: ["GET", "POST"],
};

class ServerSocket extends Server {
    private static instance: ServerSocket;
    
    constructor(httpServer: HttpServer) {
        super(httpServer, {
            serveClient: false,
            pingInterval: 10000,
            pingTimeout: 5000,
            cookie: false,
            cors: WEBSOCKET_CORS,
        });
    }

    public static getInstance(httpServer?: any): ServerSocket {
        if (!ServerSocket.instance) {
            ServerSocket.instance = new ServerSocket(httpServer);
        }
        return ServerSocket.instance;
    }

    public initializeHandlers(socketHandlers: Array<InitSocket>) {
        socketHandlers.forEach((element) => {
            let namespace = ServerSocket.instance.of(element.path, (socket: Socket)=> {
                element.handler.handleConnection(socket);
            });
            if (element.handler.middlewareImplementation) {
                namespace.use(element.handler.middlewareImplementation);
            }
        });
    }
}

export default ServerSocket;
