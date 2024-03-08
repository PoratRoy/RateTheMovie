import { Socket } from "socket.io";
import { ISocket } from "../model/interfaces/socket";
import { Player } from "../model/types/player";
import { v4 } from "uuid";
import { WarRooms, WarRoomProps, WarRoomDetails } from "../model/types/warRoom";
import { initWarRoom, initWarRoomDetails, setWarRoomDetails } from "../utils/warRoom";
import { Game } from "../model/types/game";
import { Card, ElectedCards } from "../model/types/card";
import { PACK_CARDS_NUM } from "../model/constant";
import { getPlayerWarRoomInfo } from "./utils";
import {
    CreateNewRoom,
    Disconnect,
    GameStarted,
    PlayerDisconnect,
    PlayerJoinRoom,
    PlayerJoined,
    PlayerFinish,
    PlayerWantToJoin,
    StartGame,
    PlayerFinished,
    UpdateGame,
    UpdateGameCards,
    FinishRound,
    RoundFinished,
} from "../model/constant/events";
import { logBack, logEvent, logFinish } from "../utils/logs";

class GameSocket implements ISocket {
    public warRooms: WarRooms;

    constructor() {
        this.warRooms = {};
    }

    handleConnection(socket: Socket) {
        socket.on(CreateNewRoom, (callback: (props: WarRoomDetails) => void) => {
            logEvent(CreateNewRoom);
            const roomId = v4();
            this.warRooms[roomId] = initWarRoom();
            const details = initWarRoomDetails(roomId);
            callback(details);
            logBack(details);
        });

        socket.on(
            PlayerJoinRoom,
            (
                roomId: string,
                player: Player,
                callback: (
                    props: WarRoomProps,
                    currecntPlayer: Player,
                    rivalPlayers: Player[],
                ) => void,
            ) => {
                logEvent(PlayerJoinRoom);
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
                    console.error("Error: War room not found");
                }
                socket.to(roomId).emit(PlayerJoined, updatedPlayer);
                callback(this.warRooms[roomId], updatedPlayer, rivalPlayers);
                logBack({ warRoom: this.warRooms[roomId], updatedPlayer, rivalPlayers });
            },
        );

        socket.on(UpdateGame, (game: Game) => {
            this.wrapper(UpdateGame, () => {
                const { warRoom } = getPlayerWarRoomInfo(socket, this.warRooms);
                if (warRoom && game.roomId) {
                    warRoom.game = game;
                    this.warRooms[game.roomId] = warRoom;
                }
            });
        });

        socket.on(UpdateGameCards, (cards: Card[]) => {
            this.wrapper(UpdateGameCards, () => {
                const { warRoom } = getPlayerWarRoomInfo(socket, this.warRooms);
                if (warRoom && warRoom.game?.roomId && cards.length === PACK_CARDS_NUM) {
                    warRoom.gameCards = cards;
                    this.warRooms[warRoom.game?.roomId] = warRoom;
                }
            });
        });

        socket.on(
            PlayerWantToJoin,
            (roomId: string | undefined, callback: (props: WarRoomDetails) => void) => {
                logEvent(PlayerWantToJoin);
                if (roomId) {
                    const warRoom = this.warRooms[roomId];
                    if (warRoom) {
                        const details = setWarRoomDetails(warRoom, roomId);
                        callback(details);
                        logBack(details);
                    }
                } else {
                    callback(initWarRoomDetails());
                    logBack(initWarRoomDetails());
                }
            },
        );

        socket.on(StartGame, () => {
            this.wrapper(StartGame, () => {
                const { warRoom } = getPlayerWarRoomInfo(socket, this.warRooms);
                if (warRoom && warRoom.game) {
                    const {
                        game: { roomId },
                    } = warRoom;
                    socket.to(roomId).emit(GameStarted, warRoom);
                }
            });
        });

        socket.on(PlayerFinish, (electedCards: ElectedCards, score: number) => {
            this.wrapper(PlayerFinish, () => {
                const { warRoom, player } = getPlayerWarRoomInfo(socket, this.warRooms);
                if (warRoom && player) {
                    const { game, players } = warRoom;
                    if (game?.roomId) {
                        const { roomId } = game;
                        const index = players.indexOf(player);
                        players[index].electedCards = electedCards;
                        players[index].score = score;
                        this.warRooms[game.roomId] = warRoom;
                        socket
                            .to(roomId)
                            .emit(PlayerFinished, setWarRoomDetails(warRoom, roomId));
                    }
                }
            });
        });

        socket.on(FinishRound, () => {
            const { warRoom } = getPlayerWarRoomInfo(socket, this.warRooms);
            console.log("FinishRound", warRoom);
            if (warRoom) {
                const roomId = warRoom.game?.roomId;
                if (roomId) {
                    socket.in(roomId).emit(RoundFinished, this.warRooms[roomId]);
                    // warRoom.players.forEach((player) => {
                    //     socket.broadcast.to(player.id).emit(RoundFinished, this.warRooms[roomId]);
                    // });
                }
            }
        });

        socket.on(Disconnect, () => {
            this.wrapper(Disconnect, () => {
                const { warRoom, player } = getPlayerWarRoomInfo(socket, this.warRooms);
                if (warRoom && player) {
                    const { game, players } = warRoom;
                    if (game?.roomId) {
                        const index = players.indexOf(player);
                        players.splice(index, 1);
                        this.warRooms[game.roomId] = warRoom;
                        socket.to(game?.roomId).emit(PlayerDisconnect, player);
                    }
                }
            });
        });
    }

    wrapper = (event: string, func: any) => {
        logEvent(event);
        func();
        logFinish(this.warRooms);
    };

    middlewareImplementation(socket: Socket, next: any) {
        console.info("Connection start for user ID: ", socket.id);
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
