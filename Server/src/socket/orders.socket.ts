import { Socket } from "socket.io";
import { ISocket } from "../model/interfaces/socket";

class OrdersSocket implements ISocket {
    handleConnection(socket: Socket) {
        console.log(`User ${socket.id} connected`);

        // Upon connection - only to user
        socket.emit("message", "Welcome to Chat App!");

        // Upon connection - to all others
        socket.broadcast.emit("message", `User ${socket.id.substring(0, 5)}} connected`);

        // Listening for a message event
        socket.on("message", (data) => {
            console.log(data);
            socket.emit("message", `${socket.id.substring(0, 5)}: ${data}`);
        });

        // When user disconnects - to all others
        socket.on("disconnect", () => {
            socket.broadcast.emit("message", `User ${socket.id.substring(0, 5)}} disconnected`);
        });

        // Listen for activity
        socket.on("activity", (name) => {
            socket.broadcast.emit("activity", name);
        });
    }

    middlewareImplementation(socket: Socket, next: any) {
        //Implement your middleware for orders here
        return next();
    }
}

export default OrdersSocket;
