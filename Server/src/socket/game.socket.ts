import { Socket } from "socket.io";
import { ISocket } from "../model/interfaces/socket";
import { Player } from "../model/types/player";
import { v4 } from "uuid";
import { WarRooms, WarRoomProps, WarRoomDetails } from "../model/types/warRoom";
import { getPlayerWarRoomInfo, setWarRoomDetails } from "../utils/warRoom";
import { Game } from "../model/types/game";
import { Card, ElectedCards } from "../model/types/card";
import { PACK_CARDS_NUM } from "../model/constant";
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
    LeaveRoom,
    NextRound,
    NextRoundStarted,
    GameEnded,
    Reconnect,
    PlayerRecconected,
} from "../model/constant/events";
import { logBack, logEvent, logFinish } from "../utils/logs";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { initWarRoom, initWarRoomDetails } from "../utils/init";
import { SocketConnction } from "../model/types/socket";

class GameSocket implements ISocket {
    public warRooms: WarRooms;
    public connectedUsers: { id: string; connection: SocketConnction }[];

    constructor() {
        this.warRooms = {};
        this.connectedUsers = [];
    }

    handleConnection(socket: Socket) {
        let user: { id: string; connection: SocketConnction } | undefined = undefined;

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

                user = { id: player.id, connection: socket };
                if (user && !this.checkExistingUser(user)) {
                    this.connectedUsers.push(user);
                }

                const updatedPlayer = { ...player, connection: socket.id };
                const warRoom = this.warRooms[roomId];
                let rivalPlayers: Player[] = [];
                if (warRoom) {
                    rivalPlayers = [...warRoom.players];
                    warRoom.players.push(updatedPlayer);
                    this.warRooms[roomId] = warRoom;
                    socket.to(roomId).emit(PlayerJoined, updatedPlayer);
                    callback(this.warRooms[roomId], updatedPlayer, rivalPlayers);
                    logBack({ warRoom: this.warRooms[roomId], updatedPlayer, rivalPlayers });
                } else {
                    console.error("Error: War room not found");
                }
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
                if (warRoom) {
                    const { game } = warRoom;
                    if (game?.roomId && cards.length === PACK_CARDS_NUM) {
                        warRoom.gameCards = cards;
                        this.warRooms[game?.roomId] = warRoom;
                    }
                }
            });
        });

        socket.on(
            PlayerWantToJoin,
            (roomId: string | undefined, callback: (props?: WarRoomDetails) => void) => {
                logEvent(PlayerWantToJoin);
                if (roomId) {
                    const warRoom = this.warRooms[roomId];
                    if (warRoom) {
                        const isStarted = warRoom.game?.isGameStart;
                        if (isStarted) {
                            callback();
                            logBack({ message: "Game already started" });
                        } else {
                            const details = setWarRoomDetails(warRoom, roomId);
                            callback(details);
                            logBack(details);
                        }
                    } else {
                        callback();
                        logBack({ message: "Game not found" });
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
                    const { game } = warRoom;
                    game.isRoundStart = true;
                    game.isGameStart = true;
                    socket.to(game.roomId).emit(GameStarted, warRoom);
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
                        players[index].score = players[index].score + score;
                        this.warRooms[game.roomId] = warRoom;
                        const warDetails = setWarRoomDetails(warRoom, roomId);
                        socket.nsp.to(roomId).emit(PlayerFinished, warDetails);
                    }
                }
            });
        });

        socket.on(FinishRound, () => {
            this.wrapper(FinishRound, () => {
                const { warRoom } = getPlayerWarRoomInfo(socket, this.warRooms);
                if (warRoom) {
                    const roomId = warRoom.game?.roomId;
                    if (roomId) {
                        socket.to(roomId).emit(RoundFinished, this.warRooms[roomId]);
                    }
                }
            });
        });

        socket.on(NextRound, (round: number, cards: Card[]) => {
            this.wrapper(NextRound, () => {
                const { warRoom } = getPlayerWarRoomInfo(socket, this.warRooms);
                if (warRoom) {
                    const { game, players } = warRoom;
                    if (game?.roomId) {
                        const { roomId } = game;
                        players.forEach((player) => {
                            player.electedCards = { order: [] } as ElectedCards;
                        });
                        warRoom.players = players;
                        game.currentRound = round;
                        game.isRoundFinished = false;
                        game.isPlayerFinishRound = false;
                        game.isRoundStart = true;
                        warRoom.gameCards = cards;
                        this.warRooms[roomId] = warRoom;
                        socket.to(roomId).emit(NextRoundStarted, this.warRooms[roomId]);
                    }
                }
            });
        });

        socket.on(LeaveRoom, () => {
            this.wrapper(LeaveRoom, () => {
                this.handleLeavingPlayer(socket);
            });
        });

        socket.on(Reconnect, (playerId: string) => {
            if (user && !this.checkExistingUser(user)) {
                this.connectedUsers.push(user);
            }
            user = { id: playerId, connection: socket };
        });

        socket.on(Disconnect, () => {
            this.wrapper(Disconnect, () => {
                const { warRoom, player } = getPlayerWarRoomInfo(socket, this.warRooms);
                if (warRoom && player) {
                    this.connectedUsers = this.connectedUsers.filter(
                        (user) => user.id !== player.id,
                    );

                    setTimeout(() => {
                        if (this.checkExistingUser(user)) {
                            const { game } = warRoom;
                            if (game?.roomId) {
                                const { roomId } = game;
                                const refreshedUser = this.connectedUsers.find(
                                    (u) => u.id === player.id,
                                );
                                this.connectedUsers = this.connectedUsers.filter(
                                    (u) => u.id !== player.id,
                                );
                                if (refreshedUser) {
                                    const connection = refreshedUser.connection;
                                    socket.leave(roomId);
                                    connection.join(roomId);
                                    warRoom.players.forEach((p) => {
                                        if (p.id === player.id) {
                                            p.connection = connection.id;
                                        }
                                    });
                                    this.warRooms[roomId] = warRoom;
                                    connection.emit(PlayerRecconected, this.warRooms[roomId]);
                                }
                            }
                        } else {
                            const { game, players } = warRoom;
                            if (game?.roomId) {
                                const { roomId } = game;
                                socket.leave(roomId);
                                this.connectedUsers = this.connectedUsers.filter(
                                    (u) => u.id !== player.id,
                                );
                                const index = players.indexOf(player);
                                players.splice(index, 1);
                                if (players.length === 1) {
                                    delete this.warRooms[roomId];
                                    socket.nsp.to(roomId).emit(GameEnded, player);
                                } else {
                                    this.warRooms[roomId] = warRoom;
                                    socket.nsp.to(roomId).emit(PlayerDisconnect, player);
                                }
                            }
                        }
                    }, 2000);
                }
            });
        });
    }

    checkExistingUser = (user: { id: string; connection: SocketConnction } | undefined) => {
        if (!user) return false;
        return this.connectedUsers.some((u) => u.id === user.id);
    };

    wrapper = (event: string, func: any) => {
        logEvent(event);
        func();
        logFinish(this.warRooms);
    };

    handleLeavingPlayer = (
        socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    ) => {
        const { warRoom, player } = getPlayerWarRoomInfo(socket, this.warRooms);
        if (warRoom && player) {
            const { game, players } = warRoom;
            if (game?.roomId) {
                const { roomId } = game;
                socket.leave(roomId);
                const index = players.indexOf(player);
                players.splice(index, 1);
                if (players.length === 1) {
                    delete this.warRooms[roomId];
                    socket.nsp.to(roomId).emit(GameEnded, player);
                } else {
                    this.warRooms[roomId] = warRoom;
                    socket.nsp.to(roomId).emit(PlayerDisconnect, player);
                }
            }
        }
    };

    middlewareImplementation(socket: Socket, next: any) {
        console.info("Connection start for user ID: ", socket.id);
        return next();
    }
}

export default GameSocket;
