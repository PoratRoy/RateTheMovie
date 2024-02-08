import { Socket } from "socket.io";
import { ISocket } from "../model/interfaces/socket";
import { Player } from "../model/types/player";
import { getUidFromSocketID } from "../utils/socket";
import { v4 } from "uuid";
import connection from "../model/socketConnection.json";

class GameSocket implements ISocket {
    public users: Player;

    constructor() {
        this.users = {};
    }

    handleConnection(socket: Socket) {
        console.info("Message received from " + socket.id);

        socket.on(connection.handshake, (callback: (uid: string, users: string[]) => void) => {
            console.info("Handshake received from: " + socket.id);

            const reconnected = Object.values(this.users).includes(socket.id);

            if (reconnected) {
                console.info("This user has reconnected.");

                const uid = getUidFromSocketID(socket.id, this.users);
                const users = Object.values(this.users);

                if (uid) {
                    console.info("Sending callback for reconnect ...");
                    callback(uid, users);
                    return;
                }
            }

            const uid = v4();
            this.users[uid] = socket.id;

            const users = Object.values(this.users);
            console.info("Sending callback ...");
            callback(uid, users);

            const u = users.filter((id) => id !== socket.id);
            console.info("Emitting event: " + connection.user_connected + " to", u);
            u.forEach((id) =>
                users
                    ? socket.to(id).emit(connection.user_connected, users)
                    : socket.to(id).emit(connection.user_connected),
            );
        });

        socket.on(connection.disconnect, () => {
            console.info("Disconnect received from: " + socket.id);

            const uid = getUidFromSocketID(socket.id, this.users);

            if (uid) {
                delete this.users[uid];

                const users = Object.values(this.users);

                console.info("Emitting event: " + connection.user_disconnected + " to", users);
                users.forEach((id) =>
                    socket.id
                        ? socket.to(id).emit(connection.user_disconnected, socket.id)
                        : socket.to(id).emit(connection.user_disconnected),
                );
            }
        });
    }

    middlewareImplementation(socket: Socket, next: any) {
        //Implement your middleware for orders here
        return next();
    }
}

export default GameSocket;

// // Upon connection - only to user
// socket.emit("message", "Welcome to Chat App!");

// // Upon connection - to all others
// socket.broadcast.emit("message", `User ${socket.id.substring(0, 5)}} connected`);

// // Listening for a message event
// socket.on("message", (data) => {
//     console.log(data);
//     socket.emit("message", `${socket.id.substring(0, 5)}: ${data}`);
// });

// // When user disconnects - to all others
// socket.on("disconnect", () => {
//     socket.broadcast.emit("message", `User ${socket.id.substring(0, 5)}} disconnected`);
// });

// // Listen for activity
// socket.on("activity", (name) => {
//     socket.broadcast.emit("activity", name);
// });
