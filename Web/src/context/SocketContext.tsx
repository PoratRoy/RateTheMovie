import { createContext, useContext, useEffect } from "react";
import { useSocket } from "../hooks/multiplayer/useSocket";
import { WarRoomDetails, WarRoomProps } from "../models/types/warRoom";
import { Player } from "../models/types/player";
import { MovieFilters } from "../models/types/filter";
//https://github.com/joeythelantern/Socket-IO-Basics/tree/master

export const SocketContext = createContext<{
    handleCreateNewRoom: (callback: (details: WarRoomDetails) => void) => void;
    handleGameFilters: (filters: MovieFilters) => void;
    handlePlayerWantToJoin: (
        roomId: string | undefined,
        callback: (details: WarRoomDetails) => void,
    ) => void;
    handlePlayerJoinRoom: (
        roomId: string,
        player: Player,
        callback: (playerId: string) => void,
    ) => void;
}>({
    handleCreateNewRoom: () => {},
    handleGameFilters: () => {},
    handlePlayerWantToJoin: () => {},
    handlePlayerJoinRoom: () => {},
});

export const useSocketContext = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: { children: React.ReactNode }) => {
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
                callback(details);
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
        callback: (playerId: string) => void,
    ) => {
        socket.emit(
            "PlayerJoinRoom",
            roomId,
            player,
            async (warRoom: WarRoomProps, playerId: string) => {
                if (warRoom && warRoom.game.roomId === roomId && playerId) {
                    callback(playerId);
                }
            },
        );
    };

    return (
        <SocketContext.Provider
            value={{
                handleCreateNewRoom,
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
