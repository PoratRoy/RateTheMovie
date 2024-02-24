import { Socket } from "socket.io";
import { ISocket } from "../model/interfaces/socket";
import { Player } from "../model/types/player";
import { v4 } from "uuid";
import { WarRooms, WarRoomProps, WarRoomDetails } from "../model/types/warRoom";
import { MovieFilters } from "../model/types/movie";
import { getRoomByPlayer, getRoomPlayer, initWarRoom } from "../utils/warRoom";

class GameSocket implements ISocket {
    public warRooms: WarRooms;

    constructor() {
        this.warRooms = {};
    }

    handleConnection(socket: Socket) {
        console.info("Connection start for user ID: ", socket.id);

        socket.on("CreateNewRoom", (callback: (props: WarRoomDetails) => void) => {
            const roomId = v4();
            console.info("Create new room: ", roomId);
            callback({ numberOfPlayers: 0, roomId });
        });

        socket.on("PlayerJoinRoom", (roomId: string, player: Player, callback: (props: WarRoomProps) => void) => {
            console.info(`Join room: ${roomId}, Player: `, player);
            const playerId = socket.id;
            const updatedPlayer = {...player, id: playerId};
            const warRoom = this.warRooms[roomId];
            if (warRoom) {
                warRoom.players.push(updatedPlayer);
                this.warRooms[roomId] = warRoom;
            }else{
                this.warRooms[roomId] = initWarRoom(roomId, updatedPlayer);
            }
            console.log("Game room: ", this.warRooms[roomId]);
            callback(this.warRooms[roomId]);
        });

        socket.on("UpdatePlayerName", (name: string, callback: (props: WarRoomProps) => void) => {
            console.info("Update player name: ", name);
            const playerId = socket.id;
            const warRoom = getRoomByPlayer(this.warRooms, playerId);
            if (warRoom && warRoom.room) {
                const player = getRoomPlayer(warRoom, playerId);
                if (player) {
                    player.name = name;
                    this.warRooms[warRoom.room] = warRoom;
                }
                console.log("Game room: ", this.warRooms);
                callback(this.warRooms[warRoom.room]);
            }
        });

        socket.on("UpdateGameFilters", (filters: MovieFilters) => {
            console.info("Update game filters: ", filters);
            const playerId = socket.id;
            const warRoom = getRoomByPlayer(this.warRooms, playerId);
            if (warRoom && warRoom.room) {
                warRoom.filters = filters;
                this.warRooms[warRoom.room] = warRoom;
                console.log("Game room: ", this.warRooms);
            }
        });

        socket.on(
            "PlayerWantToJoin",
            (roomId: string | undefined, callback: (props: WarRoomDetails) => void) => {
                console.info("Join room: ", roomId);
                if (roomId) {
                    const warRoom = this.warRooms[roomId];
                    if (warRoom) {
                        callback({ numberOfPlayers: warRoom.players.length, roomId });
                    }
                } else {
                    callback({ numberOfPlayers: 0 });
                }
            },
        );

        socket.on("disconnect", () => {
            console.info("Disconnect received from: " + socket.id);
            const playerId = socket.id;
            const warRoom = getRoomByPlayer(this.warRooms, playerId);
            if (warRoom && warRoom.room) {
                const player = getRoomPlayer(warRoom, playerId);
                if (player) {
                    const index = warRoom.players.indexOf(player);
                    warRoom.players.splice(index, 1);
                    this.warRooms[warRoom.room] = warRoom;
                }
                console.log("Game room: ", this.warRooms);
            }
        });
    }

    middlewareImplementation(socket: Socket, next: any) {
        //Implement your middleware for orders here
        return next();
    }
}

export default GameSocket;

// {
//     room: undefined,
//     players: [],
//     gameCards: [],
//     filters: {
//         year: undefined,
//         genre: undefined,
//         language: undefined,
//     },
// }

// socket.on("handshake2", (callback: (uid: string, warRoom: string[]) => void) => {
//     console.info("Handshake received from: " + socket.id);

//     const reconnected = Object.values(this.warRoom).includes(socket.id);

//     if (reconnected) {
//         console.info("This user has reconnected.");

//         const uid = getPlayerIdFromSocketID(socket.id, this.warRoom);
//         const warRoom = Object.values(this.warRoom);

//         if (uid) {
//             console.info("Sending callback for reconnect ...");
//             callback(uid, warRoom);
//             return;
//         }
//     }

//     const uid = v4();
//     this.warRoom[uid] = socket.id;

//     const warRoom = Object.values(this.warRoom);
//     console.info("Sending callback ...");
//     callback(uid, warRoom);

//     const u = warRoom.filter((id) => id !== socket.id);
//     console.info("Emitting event: " + "user_connected" + " to", u);
//     u.forEach((id) =>
//         warRoom
//             ? socket.to(id).emit("user_connected", warRoom)
//             : socket.to(id).emit("user_connected"),
//     );
// });

// socket.on(connection.disconnect, () => {
//     console.info("Disconnect received from: " + socket.id);

//     const uid = getPlayerIdFromSocketID(socket.id, this.warRoom);

//     if (uid) {
//         delete this.warRoom[uid];

//         const warRoom = Object.values(this.warRoom);

//         console.info("Emitting event: " + connection.user_disconnected + " to", warRoom);
//         warRoom.forEach((id) =>
//             socket.id
//                 ? socket.to(id).emit(connection.user_disconnected, socket.id)
//                 : socket.to(id).emit(connection.user_disconnected),
//         );
//     }
// });

// socket.on(connection.handshake, (callback: (uid: string, warRoom: string[]) => void) => {
//     console.info("Handshake received from: " + socket.id);

//     const reconnected = Object.values(this.warRoom).includes(socket.id);

//     if (reconnected) {
//         console.info("This user has reconnected.");

//         const uid = getPlayerIdFromSocketID(socket.id, this.warRoom);
//         const warRoom = Object.values(this.warRoom);

//         if (uid) {
//             console.info("Sending callback for reconnect ...");
//             callback(uid, warRoom);
//             return;
//         }
//     }

//     const uid = v4();
//     this.warRoom[uid] = socket.id;

//     const warRoom = Object.values(this.warRoom);
//     console.info("Sending callback ...");
//     callback(uid, warRoom);

//     const u = warRoom.filter((id) => id !== socket.id);
//     console.info("Emitting event: " + connection.user_connected + " to", u);
//     u.forEach((id) =>
//         warRoom
//             ? socket.to(id).emit(connection.user_connected, warRoom)
//             : socket.to(id).emit(connection.user_connected),
//     );
// });

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
