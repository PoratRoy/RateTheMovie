import { createContext, useContext, useEffect } from "react";
import { useSocket } from "../hooks/context/useSocket";
import { WarRoomDetails, WarRoomProps } from "../models/types/warRoom";
import Session from "../utils/sessionStorage";
import { SessionKey } from "../models/enums/session";
import { MovieFilters } from "../models/types/movie";
import { useGamePlayContext } from "./GamePlayContext";
import { SinglePlayerRoom } from "../models/constants";
import { Player } from "../models/types/player";
//https://github.com/joeythelantern/Socket-IO-Basics/tree/master

export const SocketContext = createContext<{
    handleCreateNewRoom: (callback: (details: WarRoomDetails) => void) => void;
    handleUpdatePlayerName: (name: string) => void;
    handleGameFilters: (filters: MovieFilters) => void;
    handlePlayerWantToJoin: (
        roomId: string | undefined,
        callback: (details: WarRoomDetails) => void,
    ) => void;
    handlePlayerJoinRoom: (
        roomId: string,
        player: Player,
        callback: (players: Player[]) => void,
    ) => void;
}>({
    handleCreateNewRoom: () => {},
    handleUpdatePlayerName: () => {},
    handleGameFilters: () => {},
    handlePlayerWantToJoin: () => {},
    handlePlayerJoinRoom: () => {},
});

export const useSocketContext = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { setCurrentPlayer } = useGamePlayContext();

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
        socket.emit("CreateNewRoom", async (details: WarRoomDetails) => {
            if (details) {
                const { roomId } = details;
                Session.set(SessionKey.ROOM, roomId || SinglePlayerRoom);
                callback(details);
            }
        });
    };

    const handleUpdatePlayerName = (name: string) => {
        socket.emit("UpdatePlayerName", name, async (warRoom: WarRoomProps) => {
            if (warRoom && warRoom.room) {
                const { players } = warRoom;
                //TODO: fix it
                const player = players.find((p) => p.name === name);
                if(player){
                    Session.set(SessionKey.CURRENT_PLAYER, player);
                    setCurrentPlayer(player);
                }
            }
        });
    };

    const handleGameFilters = (filters: MovieFilters) => {
        socket.emit("UpdateGameFilters", filters);
    };

    const handlePlayerWantToJoin = (
        roomId: string | undefined,
        callback: (details: WarRoomDetails) => void,
    ) => {
        socket.emit("PlayerWantToJoin", roomId, async (details: WarRoomDetails) => {
            callback(details);
        });
    };

    const handlePlayerJoinRoom = (
        roomId: string,
        player: Player,
        callback: (players: Player[]) => void,
    ) => {
        socket.emit("PlayerJoinRoom", roomId, player, async (warRoom: WarRoomProps) => {
            if (warRoom && warRoom.room) {
                callback(warRoom.players);
            }
        });
    };

    return (
        <SocketContext.Provider
            value={{
                handleCreateNewRoom,
                handleUpdatePlayerName,
                handleGameFilters,
                handlePlayerWantToJoin,
                handlePlayerJoinRoom,
            }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;

// multiplayerState: MultiplayerState;
// setMultiplayerState: React.Dispatch<React.SetStateAction<MultiplayerState>>;
// multiplayerState: initMultiplayerState,
// setMultiplayerState: () => {},
// const [multiplayerState, setMultiplayerState] =
//     useState<MultiplayerState>(initMultiplayerState);

// setMultiplayerState((prev) => ({ ...prev, socket }));
// setMultiplayerState((prev) => ({ ...prev, warRoom }));
