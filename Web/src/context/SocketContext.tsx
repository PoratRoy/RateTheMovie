import { createContext, useContext, useEffect, useState } from "react";
import { useSocket } from "../hooks/multiplayer/useSocket";
import { WarRoomDetails, WarRoomProps } from "../models/types/warRoom";
import { Player } from "../models/types/player";
import { Game } from "../models/types/game";
import { useErrorContext } from "./ErrorContext";
import { Card, ElectedCards } from "../models/types/card";
import useHandleMovies from "../hooks/gameplay/useHandleMovies";
import { useGamePlayContext } from "./GamePlayContext";
import { filterOnlyRivalPlayers, filterRivalPlayers } from "../utils/player";
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
    NextRoundStarted,
    NextRound,
    LeaveRoom,
    GameEnded,
    Reconnect,
    PlayerRecconected,
} from "../models/constant/socketEvents";
import Session from "../utils/storage/sessionStorage";
import { SessionKey } from "../models/enums/session";
import { FILP_CARD_TIME } from "../models/constant/time";
import { useAnimationContext } from "./AnimationContext";
import { CardFace } from "../models/enums/animation";
import useGameActions from "../hooks/gameplay/useGameActions";
import useMod from "../hooks/gameplay/useMod";
//https://github.com/joeythelantern/Socket-IO-Basics/tree/master

export const SocketContext = createContext<{
    rivalPlayers: Player[] | undefined;
    handleCreateNewRoom: (callback: (details: WarRoomDetails) => void) => void;
    handleGame: (game: Game) => void;
    handlePlayerWantToJoin: (
        roomId: string | undefined,
        callback: (details?: WarRoomDetails) => void,
    ) => void;
    handlePlayerJoinRoom: (
        roomId: string,
        player: Player,
        callback: (currecntPlayer: Player, game?: Game) => void,
    ) => void;
    handleCards: (cards: Card[]) => void;
    handleStartGame: () => void;
    handlePlayerFinish: (electedCards: ElectedCards, score: number) => void;
    handlePlayerLeave: () => void;
    handleNextRound: (currentRound: number, cards: Card[]) => void;
    clearSocketContext: () => void;
}>({
    rivalPlayers: [],
    handleCreateNewRoom: () => {},
    handleGame: () => {},
    handlePlayerWantToJoin: () => {},
    handlePlayerJoinRoom: () => {},
    handleCards: () => {},
    handleStartGame: () => {},
    handlePlayerFinish: () => {},
    handleNextRound: () => {},
    handlePlayerLeave: () => {},
    clearSocketContext: () => {},
});

export const useSocketContext = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [rivalPlayers, setRivalPlayers] = useState<Player[] | undefined>();
    const { handleAlert } = useErrorContext();
    const { handleGameCards } = useHandleMovies();
    const { setIsFlipCard } = useAnimationContext();
    const { game, setGame, setIsRoundFinished, setIsRefeshed } = useGamePlayContext();
    const { handleQuit } = useGameActions(() => {});
    const { isMulti } = useMod();

    const socket = useSocket(`${import.meta.env.VITE_BE_URL}/game`, {
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        autoConnect: false,
    });

    useEffect(() => {
        if (!socket.connected) {
            socket.connect();
            const player: Player | undefined = Session.get(SessionKey.CURRENT_PLAYER);
            const game: Game | undefined = Session.get(SessionKey.GAME);
            if (player && game) {
                socket.emit(Reconnect, player.id);
            }
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

    //TODO: extract to a hook
    //TODO: put as useCallBack
    const setStateFromSession = () => {
        if (!rivalPlayers) {
            const sessionRivalPlayers: Player[] | undefined = Session.get(SessionKey.RIVAL_PLAYERS);
            if (sessionRivalPlayers) setRivalPlayers(sessionRivalPlayers);
        }
    };
    setStateFromSession();

    //TODO: usecallback?
    useEffect(() => {
        const currentPlayer: Player | undefined = Session.get(SessionKey.CURRENT_PLAYER);
        const role = currentPlayer?.role;
        if (game && isMulti(game.mod) && role === "host") {
            handleGame(game);
        }
    }, [game]);

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
        callback: (details?: WarRoomDetails) => void,
    ) => {
        socket.emit(PlayerWantToJoin, roomId, async (details?: WarRoomDetails) => {
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
                        const players = prev ? [...prev, ...rivalPlayers] : [...rivalPlayers];
                        Session.set(SessionKey.RIVAL_PLAYERS, players);
                        return players;
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
        socket.emit(StartGame);
    };

    const handlePlayerFinish = (electedCards: ElectedCards, score: number) => {
        socket.emit(PlayerFinish, electedCards, score);
    };

    const handleNextRound = (round: number, cards: Card[]) => {
        socket.emit(NextRound, round, cards);
    };

    const handlePlayerLeave = () => {
        socket.emit(LeaveRoom);
    };

    //  <<-----------------  Socket Events  ----------------->>

    useEffect(() => {
        const handlePlayerJoined = (player: Player) => {
            setRivalPlayers((prev) => {
                const players = prev ? [...prev, player] : [player];
                Session.set(SessionKey.RIVAL_PLAYERS, players);
                return players;
            });
        };

        const handleGameStarted = (warRoom: WarRoomProps) => {
            const { game, gameCards } = warRoom;
            if (game) {
                handleGameCards(gameCards);
                setGame(game);
                Session.set(SessionKey.GAME, game);
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
            const player: Player | undefined = Session.get(SessionKey.CURRENT_PLAYER);
            const rivalPlayers = filterOnlyRivalPlayers(players, player);
            Session.set(SessionKey.RIVAL_PLAYERS, rivalPlayers);
            setRivalPlayers(rivalPlayers);
            setIsRoundFinished(true);
        };

        const handleNextRoundStarted = (warRoom: WarRoomProps) => {
            const { game, gameCards } = warRoom;
            if (game) {
                setGame(game);
                handleGameCards(gameCards);
                Session.set(SessionKey.GAME, game);
                setTimeout(() => {
                    setIsFlipCard(CardFace.FRONT);
                }, FILP_CARD_TIME);
            }
        };

        const handleReconnection = () => {
            setIsRefeshed(true);
        };

        const handlePlayerDisconnected = (player: Player) => {
            setRivalPlayers((prev) => {
                if (!prev) return [];
                const players = filterRivalPlayers(prev, player.id);
                Session.set(SessionKey.RIVAL_PLAYERS, players);
                return players;
            });
            const message = `${player.name} has left the game.`;
            handleAlert(message);
        };

        const handleGameEnded = (player: Player) => {
            const game: Game | undefined = Session.get(SessionKey.GAME);
            if (game?.isGameOver) {
                handlePlayerDisconnected(player);
            } else {
                setRivalPlayers([]);
                Session.set(SessionKey.RIVAL_PLAYERS, []);
                const message = "Last survivor standing. Game concluding as no opponents remain.";
                handleAlert(message, 5000);
                handleQuit();
            }
        };

        socket.on(PlayerJoined, handlePlayerJoined);
        socket.on(GameStarted, handleGameStarted);
        socket.on(PlayerFinished, handlePlayerFinished);
        socket.on(RoundFinished, handleRoundFinished);
        socket.on(NextRoundStarted, handleNextRoundStarted);
        socket.on(PlayerRecconected, handleReconnection);
        socket.on(PlayerDisconnect, handlePlayerDisconnected);
        socket.on(GameEnded, handleGameEnded);

        return () => {
            socket.off(PlayerJoined, handlePlayerJoined);
            socket.off(GameStarted, handleGameStarted);
            socket.off(PlayerFinished, handlePlayerFinished);
            socket.off(RoundFinished, handleRoundFinished);
            socket.off(NextRoundStarted, handleNextRoundStarted);
            socket.off(PlayerRecconected, handleReconnection);
            socket.off(PlayerDisconnect, handlePlayerDisconnected);
            socket.off(GameEnded, handleGameEnded);
        };
    }, [socket]);

    const clearSocketContext = () => {
        Session.remove(SessionKey.RIVAL_PLAYERS);
        setRivalPlayers([]);
    };

    return (
        <SocketContext.Provider
            value={{
                rivalPlayers,
                handleCreateNewRoom,
                handleGame,
                handlePlayerWantToJoin,
                handlePlayerJoinRoom,
                handleCards,
                handleStartGame,
                handlePlayerFinish,
                handleNextRound,
                handlePlayerLeave,
                clearSocketContext,
            }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;
