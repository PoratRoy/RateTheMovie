import { createContext, useContext, useEffect, useState } from "react";
import { useSocket } from "../hooks/multiplayer/useSocket";
import { WarRoomDetails, WarRoomProps } from "../models/types/warRoom";
import { RivalPlayer } from "../models/types/player";
import { Game } from "../models/types/game";
import { useErrorContext } from "./ErrorContext";
import { Card, RivalCard } from "../models/types/card";
import useHandleMovies from "../hooks/gameplay/useHandleMovies";
import { useGamePlayContext } from "./GamePlayContext";
import { filterRivalPlayers } from "../utils/player";
import {
    CreateNewRoom,
    GameStarted,
    PlayerDisconnect,
    PlayerJoinRoom,
    PlayerJoined,
    PlayerSubmitedHisCards,
    PlayerWantToJoin,
    StartGame,
    SubmitElectedCards,
    UpdateGame,
    UpdateGameCards,
} from "../models/constant/socketEvents";
//https://github.com/joeythelantern/Socket-IO-Basics/tree/master

export const SocketContext = createContext<{
    rivalPlayers: RivalPlayer[];
    setRivalPlayers: React.Dispatch<React.SetStateAction<RivalPlayer[]>>;
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
        player: RivalPlayer,
        callback: (currecntPlayer: RivalPlayer) => void,
    ) => void;
    handleCards: (cards: Card[]) => void;
    handleStartGame: () => void;
    handleSubmitElectedCards: (cards: RivalCard) => void;
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
    handleSubmitElectedCards: () => {},
});

export const useSocketContext = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [rivalPlayers, setRivalPlayers] = useState<RivalPlayer[]>([]);
    const [startGame, setStartGame] = useState<boolean>(false);
    const { handleAlert } = useErrorContext();
    const { handleGameCards } = useHandleMovies();
    const { setGame, currentPlayer } = useGamePlayContext();

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
        player: RivalPlayer,
        callback: (currecntPlayer: RivalPlayer) => void,
    ) => {
        socket.emit(
            PlayerJoinRoom,
            roomId,
            player,
            async (
                warRoom: WarRoomProps,
                currecntPlayer: RivalPlayer,
                rivalPlayers: RivalPlayer[],
            ) => {
                if (warRoom && currecntPlayer) {
                    setRivalPlayers((prev) => {
                        return [...prev, ...rivalPlayers];
                    });
                    callback(currecntPlayer);
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

    const handleSubmitElectedCards = (cards: RivalCard) => {
        socket.emit(SubmitElectedCards, cards);
    };

    useEffect(() => {
        const handlePlayerJoined = (player: RivalPlayer) => {
            setRivalPlayers((prev) => {
                return [...prev, player];
            });
        };

        const handleGameStarted = (warRoom: WarRoomProps) => {
            const { game, gameCards, players } = warRoom;
            handleGameCards(gameCards);
            setGame(game);
            const rivalPlayers = filterRivalPlayers(players, currentPlayer?.id);
            setRivalPlayers(rivalPlayers);
            setStartGame(true);
        };

        const handlePlayerSubmitedHisCards = (warRoom: WarRoomProps) => {
            const { players } = warRoom;
            const rivalPlayers = filterRivalPlayers(players, currentPlayer?.id);
            setRivalPlayers(rivalPlayers);
        };

        const handlePlayerDisconnected = (player: RivalPlayer) => {
            setRivalPlayers((prev) => {
                return filterRivalPlayers(prev, player.id);
            });
            const message = `${player.name} has left the game`;
            handleAlert(message);
        };

        socket.on(PlayerJoined, handlePlayerJoined);
        socket.on(GameStarted, handleGameStarted);
        socket.on(PlayerSubmitedHisCards, handlePlayerSubmitedHisCards);
        socket.on(PlayerDisconnect, handlePlayerDisconnected);

        return () => {
            socket.off(PlayerJoined, handlePlayerJoined);
            socket.off(GameStarted, handleGameStarted);
            socket.off(PlayerDisconnect, handlePlayerDisconnected);
        };
    }, [socket]);

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
                handleSubmitElectedCards,
            }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;
