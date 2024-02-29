import { Socket } from "socket.io";
import { ISocket } from "../model/interfaces/socket";
import { Player } from "../model/types/player";
import { v4 } from "uuid";
import { WarRooms, WarRoomProps, WarRoomDetails } from "../model/types/warRoom";
import { getRoomByPlayer, initWarRoom } from "../utils/warRoom";
import { Game } from "../model/types/game";
import { Card } from "../model/types/card";
import { PACK_CARDS_NUM } from "../model/constant";

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

        socket.on(
            "PlayerJoinRoom",
            (
                roomId: string,
                player: Player,
                callback: (
                    props: WarRoomProps,
                    currecntPlayer: Player,
                    rivalPlayers: Player[],
                ) => void,
            ) => {
                console.info(`Join room: ${roomId}, Player: `, player);
                socket.join(roomId);
                const playerId = socket.id;
                const updatedPlayer = { ...player, id: playerId };
                const warRoom = this.warRooms[roomId];
                let rivalPlayers: Player[] = [];
                if (warRoom) {
                    rivalPlayers = [...warRoom.players];
                    warRoom.players.push(updatedPlayer);
                    this.warRooms[roomId] = warRoom;
                } else {
                    this.warRooms[roomId] = initWarRoom(updatedPlayer);
                }
                console.log("Game room: ", this.warRooms[roomId]);
                socket.to(roomId).emit("PlayerJoined", updatedPlayer);
                callback(this.warRooms[roomId], updatedPlayer, rivalPlayers);
            },
        );

        socket.on("UpdateGame", (game: Game) => {
            console.info("Update war room game: ", game);
            const playerId = socket.id;
            const { warRoom } = getRoomByPlayer(this.warRooms, playerId);
            if (warRoom && game.roomId) {
                warRoom.game = game;
                this.warRooms[game.roomId] = warRoom;
                console.log("Game room: ", this.warRooms);
            }
        });

        socket.on("UpdateGameCards", (cards: Card[]) => {
            console.info("Update war room game cards: ", cards);
            const playerId = socket.id;
            const { warRoom } = getRoomByPlayer(this.warRooms, playerId);
            if (warRoom && warRoom.game?.roomId && cards.length === PACK_CARDS_NUM) {
                warRoom.gameCards = cards;
                this.warRooms[warRoom.game?.roomId] = warRoom;
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

        socket.on("StartGame", () => {
            console.info("Start game received.");
            const playerId = socket.id;
            const { warRoom } = getRoomByPlayer(this.warRooms, playerId);
            if (warRoom) {
                const { game } = warRoom;
                if (game?.roomId) {
                    console.log("Game room: ", this.warRooms);
                    socket.to(game?.roomId).emit("GameStarted", warRoom);
                }
            }
        });

        socket.on("disconnect", () => {
            console.info("Disconnect received from: " + socket.id);
            const playerId = socket.id;
            const { warRoom, player } = getRoomByPlayer(this.warRooms, playerId);
            if (warRoom && player) {
                const { game, players } = warRoom;
                if (game?.roomId) {
                    const index = players.indexOf(player);
                    players.splice(index, 1);
                    this.warRooms[game.roomId] = warRoom;
                    console.log("Game room: ", this.warRooms);
                    socket.to(game?.roomId).emit("PlayerDisconnect", player);
                }
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
