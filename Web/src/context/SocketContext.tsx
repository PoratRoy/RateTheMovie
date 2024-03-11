import { createContext, useContext, useEffect, useState } from "react";
import { useSocket } from "../hooks/multiplayer/useSocket";
import { WarRoomDetails, WarRoomProps } from "../models/types/warRoom";
import { Player } from "../models/types/player";
import { Game } from "../models/types/game";
import { useErrorContext } from "./ErrorContext";
import { Card, ElectedCards } from "../models/types/card";
import useHandleMovies from "../hooks/gameplay/useHandleMovies";
import { useGamePlayContext } from "./GamePlayContext";
import { filterRivalPlayers } from "../utils/player";
import {
    CreateNewRoom,
    GameStarted,
    PlayerDisconnect,
    PlayerJoinRoom,
    PlayerJoined,
    PlayerFinished,
    PlayerWantToJoin,
    StartGame,
    PlayerFinish,
    UpdateGame,
    UpdateGameCards,
    FinishRound,
    RoundFinished,
} from "../models/constant/socketEvents";
import Session from "../utils/storage/sessionStorage";
import { SessionKey } from "../models/enums/session";
//https://github.com/joeythelantern/Socket-IO-Basics/tree/master

export const SocketContext = createContext<{
    rivalPlayers: Player[];
    setRivalPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
    startGame: boolean;
    setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
    handleCreateNewRoom: (callback: (details: WarRoomDetails) => void) => void;
    handleGame: (game: Game) => void;
    handlePlayerWantToJoin: (
        roomId: string | undefined,
        callback: (details: WarRoomDetails) => void,
    ) => void;
    handlePlayerJoinRoom: (
        roomId: string,
        player: Player,
        callback: (currecntPlayer: Player, game?: Game) => void,
    ) => void;
    handleCards: (cards: Card[]) => void;
    handleStartGame: () => void;
    handlePlayerFinish: (electedCards: ElectedCards, score: number) => void;
    leaderBoardPlayers: Player[];
    resetSocketContext: () => void;
    clearSocketContext: () => void;
}>({
    rivalPlayers: [],
    setRivalPlayers: () => {},
    startGame: false,
    setStartGame: () => {},
    handleCreateNewRoom: () => {},
    handleGame: () => {},
    handlePlayerWantToJoin: () => {},
    handlePlayerJoinRoom: () => {},
    handleCards: () => {},
    handleStartGame: () => {},
    handlePlayerFinish: () => {},
    leaderBoardPlayers: [],
    resetSocketContext: () => {},
    clearSocketContext: () => {},
});

export const useSocketContext = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [rivalPlayers, setRivalPlayers] = useState<Player[]>([]);
    const [leaderBoardPlayers, setLeaderBoardPlayers] = useState<Player[]>([]);
    const [startGame, setStartGame] = useState<boolean>(false);
    const { handleAlert } = useErrorContext();
    const { handleGameCards } = useHandleMovies();
    const { setGame, setIsRoundFinished } = useGamePlayContext();

    const socket = useSocket("http://localhost:8080/game", {
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        autoConnect: false,
    });

    useEffect(() => {
        if (!socket.connected) {
            socket.connect();
        }

        socket.on("connect", () => {
            console.log("Connected to server!");
        });
        socket.on("connect_error", (error) => {
            console.error("Connection error:", error);
        });

        return () => {
            socket.off("connect");
            socket.off("connect_error");
        };
    }, []);

    const handleCreateNewRoom = (callback: (details: WarRoomDetails) => void) => {
        socket.emit(CreateNewRoom, async (details: WarRoomDetails) => {
            if (details) {
                callback(details);
            }
        });
    };

    const handleGame = (game: Game) => {
        socket.emit(UpdateGame, game);
    };

    const handlePlayerWantToJoin = (
        roomId: string | undefined,
        callback: (details: WarRoomDetails) => void,
    ) => {
        socket.emit(PlayerWantToJoin, roomId, async (details: WarRoomDetails) => {
            callback(details);
        });
    };

    const handlePlayerJoinRoom = (
        roomId: string,
        player: Player,
        callback: (currecntPlayer: Player, game?: Game) => void,
    ) => {
        socket.emit(
            PlayerJoinRoom,
            roomId,
            player,
            async (warRoom: WarRoomProps, currecntPlayer: Player, rivalPlayers: Player[]) => {
                if (warRoom && currecntPlayer) {
                    setRivalPlayers((prev) => {
                        return [...prev, ...rivalPlayers];
                    });
                    callback(currecntPlayer, warRoom.game);
                }
            },
        );
    };

    const handleCards = (cards: Card[]) => {
        socket.emit(UpdateGameCards, cards);
    };

    const handleStartGame = () => {
        setStartGame(true);
        socket.emit(StartGame);
    };

    const handlePlayerFinish = (electedCards: ElectedCards, score: number) => {
        socket.emit(PlayerFinish, electedCards, score);
    };

    useEffect(() => {
        const handlePlayerJoined = (player: Player) => {
            setRivalPlayers((prev) => {
                return [...prev, player];
            });
        };

        const handleGameStarted = (warRoom: WarRoomProps) => {
            const { game, gameCards } = warRoom;
            if (game) {
                handleGameCards(gameCards);
                setGame(game);
                Session.set(SessionKey.GAME, game);
                setStartGame(true);
            }
        };

        const handlePlayerFinished = (details: WarRoomDetails) => {
            const { numberOfFinishedPlayers, numberOfPlayers } = details;
            if (numberOfFinishedPlayers === numberOfPlayers) {
                socket.emit(FinishRound);
            }
        };

        const handleRoundFinished = (warRoom: WarRoomProps) => {
            const { players } = warRoom;
            setLeaderBoardPlayers(players);
            setTimeout(() => {
                setIsRoundFinished(true);
            }, 2500); //the time of the finish animation
        };

        const handlePlayerDisconnected = (player: Player) => {
            setRivalPlayers((prev) => {
                return filterRivalPlayers(prev, player.id);
            });
            const message = `${player.name} has left the game`;
            handleAlert(message);
        };

        socket.on(PlayerJoined, handlePlayerJoined);
        socket.on(GameStarted, handleGameStarted);
        socket.on(PlayerFinished, handlePlayerFinished);
        socket.on(RoundFinished, handleRoundFinished);
        socket.on(PlayerDisconnect, handlePlayerDisconnected);

        return () => {
            socket.off(PlayerJoined, handlePlayerJoined);
            socket.off(GameStarted, handleGameStarted);
            socket.off(PlayerFinished, handlePlayerFinished);
            socket.off(RoundFinished, handleRoundFinished);
            socket.off(PlayerDisconnect, handlePlayerDisconnected);
        };
    }, [socket]);

    const resetSocketContext = () => {
        setStartGame(false);
        setLeaderBoardPlayers([]);
    };

    const clearSocketContext = () => {
        setStartGame(false);
        setRivalPlayers([]);
        setLeaderBoardPlayers([]);
    };

    return (
        <SocketContext.Provider
            value={{
                rivalPlayers,
                setRivalPlayers,
                startGame,
                setStartGame,
                handleCreateNewRoom,
                handleGame,
                handlePlayerWantToJoin,
                handlePlayerJoinRoom,
                handleCards,
                handleStartGame,
                handlePlayerFinish,
                leaderBoardPlayers,
                resetSocketContext,
                clearSocketContext,
            }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;
