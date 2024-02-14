import { Socket } from "socket.io";
import { ISocket } from "../model/interfaces/socket";
import { Player } from "../model/types/player";
import { v4 } from "uuid";
import { GameRooms, GameRoomProps } from "../model/types/gameRoom";
import { initPlayer } from "../model/initialization/player";
import { getPlayerIndex } from "../utils/calc";
import { MovieFilters } from "../model/types/movie";

class GameSocket implements ISocket {
    public gameRoom: GameRooms;

    constructor() {
        this.gameRoom = {};
    }

    handleConnection(socket: Socket) {
        console.info("Connection start for user ID: ", socket.id);

        socket.on("CreateNewRoom", (callback: (props: GameRoomProps) => void) => {
            console.info("Create new room");
            const roomId = v4();
            const playerId = socket.id;
            const gameRoom = this.gameRoom[roomId];
            if (!gameRoom) {
                const player: Player = initPlayer(playerId, getPlayerIndex([]));
                const props: GameRoomProps = {
                    room: roomId,
                    players: [player],
                    gameCards: [],
                    filters: {
                        year: undefined,
                        genre: undefined,
                        language: undefined,
                    },
                };
                this.gameRoom[roomId] = props;
            }
            console.log("New game room: ", this.gameRoom[roomId]);
            callback(this.gameRoom[roomId]);
        });

        socket.on("UpdatePlayerName", (name: string, callback: (props: GameRoomProps) => void) => {
            console.info("Update player name: ", name);
            const playerId = socket.id;
            const gameRoom = Object.values(this.gameRoom).find((room) =>
                room.players.find((player) => player.id === playerId),
            );
            if (gameRoom && gameRoom.room) {
                const player = gameRoom.players.find((player) => player.id === playerId);
                if (player) {
                    player.name = name;
                    this.gameRoom[gameRoom.room] = gameRoom;
                }
                console.log("Game room: ", this.gameRoom);
                callback(this.gameRoom[gameRoom.room]);
            }
        });

        socket.on(
            "UpdateGameFilters",
            (filters: MovieFilters, callback: (props: GameRoomProps) => void) => {
                console.info("Update game filters: ", filters);
                const playerId = socket.id;
                const gameRoom = Object.values(this.gameRoom).find((room) =>
                    room.players.find((player) => player.id === playerId),
                );
                if (gameRoom && gameRoom.room) {
                    gameRoom.filters = filters;
                    this.gameRoom[gameRoom.room] = gameRoom;
                    console.log("Game room: ", this.gameRoom);
                    callback(this.gameRoom[gameRoom.room]);
                }
            }
        )

        socket.on(
            "AddPlayerToRoom",
            (props: GameRoomProps, callback: (props: GameRooms, roomId: string) => void) => {
                console.info("Add new player for props: ", props);
                const playerId = socket.id;
                const roomId = props.room || "";
                const gameRoom = this.gameRoom[roomId];
                if (gameRoom) {
                    const player: Player = initPlayer(playerId, getPlayerIndex(props.players));
                    props.players.push(player);
                    this.gameRoom[roomId] = props;
                }
                //TODO: if room not found create one
                console.log("Game room: ", this.gameRoom);
                callback(this.gameRoom, roomId);
            },
        );
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

// socket.on("handshake2", (callback: (uid: string, gameRoom: string[]) => void) => {
//     console.info("Handshake received from: " + socket.id);

//     const reconnected = Object.values(this.gameRoom).includes(socket.id);

//     if (reconnected) {
//         console.info("This user has reconnected.");

//         const uid = getPlayerIdFromSocketID(socket.id, this.gameRoom);
//         const gameRoom = Object.values(this.gameRoom);

//         if (uid) {
//             console.info("Sending callback for reconnect ...");
//             callback(uid, gameRoom);
//             return;
//         }
//     }

//     const uid = v4();
//     this.gameRoom[uid] = socket.id;

//     const gameRoom = Object.values(this.gameRoom);
//     console.info("Sending callback ...");
//     callback(uid, gameRoom);

//     const u = gameRoom.filter((id) => id !== socket.id);
//     console.info("Emitting event: " + "user_connected" + " to", u);
//     u.forEach((id) =>
//         gameRoom
//             ? socket.to(id).emit("user_connected", gameRoom)
//             : socket.to(id).emit("user_connected"),
//     );
// });

// socket.on(connection.disconnect, () => {
//     console.info("Disconnect received from: " + socket.id);

//     const uid = getPlayerIdFromSocketID(socket.id, this.gameRoom);

//     if (uid) {
//         delete this.gameRoom[uid];

//         const gameRoom = Object.values(this.gameRoom);

//         console.info("Emitting event: " + connection.user_disconnected + " to", gameRoom);
//         gameRoom.forEach((id) =>
//             socket.id
//                 ? socket.to(id).emit(connection.user_disconnected, socket.id)
//                 : socket.to(id).emit(connection.user_disconnected),
//         );
//     }
// });

// socket.on(connection.handshake, (callback: (uid: string, gameRoom: string[]) => void) => {
//     console.info("Handshake received from: " + socket.id);

//     const reconnected = Object.values(this.gameRoom).includes(socket.id);

//     if (reconnected) {
//         console.info("This user has reconnected.");

//         const uid = getPlayerIdFromSocketID(socket.id, this.gameRoom);
//         const gameRoom = Object.values(this.gameRoom);

//         if (uid) {
//             console.info("Sending callback for reconnect ...");
//             callback(uid, gameRoom);
//             return;
//         }
//     }

//     const uid = v4();
//     this.gameRoom[uid] = socket.id;

//     const gameRoom = Object.values(this.gameRoom);
//     console.info("Sending callback ...");
//     callback(uid, gameRoom);

//     const u = gameRoom.filter((id) => id !== socket.id);
//     console.info("Emitting event: " + connection.user_connected + " to", u);
//     u.forEach((id) =>
//         gameRoom
//             ? socket.to(id).emit(connection.user_connected, gameRoom)
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
