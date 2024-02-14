import { createContext, useContext, useState } from "react";
import { useSocket } from "../hooks/context/useSocket";
import { initMultiplayerState } from "../models/initialization/context";
import { WarRoomProps, WarRooms } from "../models/types/warRoom";
import { MultiplayerState } from "../models/types/multiplayer";
import Session from "../utils/sessionStorage";
import { SessionKey } from "../models/enums/session";
import { MovieFilters } from "../models/types/movie";
//https://github.com/joeythelantern/Socket-IO-Basics/tree/master

export const SocketContext = createContext<{
    multiplayerState: MultiplayerState;
    setMultiplayerState: React.Dispatch<React.SetStateAction<MultiplayerState>>;
    handleSocketConnection: () => void;
    handleCreateNewRoom: () => void;
    handleUpdatePlayerName: (name: string) => void;
    handleGameFilters: (filters: MovieFilters) => void;
}>({
    multiplayerState: initMultiplayerState,
    setMultiplayerState: () => {},
    handleCreateNewRoom: () => {},
    handleSocketConnection: () => {},
    handleUpdatePlayerName: () => {},
    handleGameFilters: () => {},
});

export const useSocketContext = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [multiplayerState, setMultiplayerState] =
        useState<MultiplayerState>(initMultiplayerState);

    const socket = useSocket("http://localhost:8080/game", {
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        autoConnect: false,
    });

    const handleSocketConnection = () => {
        socket.connect();
    };

    const handleCreateNewRoom = () => {
        handleSocketConnection();

        setMultiplayerState((prev) => ({ ...prev, socket }));
        socket.emit("CreateNewRoom", async (warRoom: WarRoomProps) => {
            setMultiplayerState((prev) => ({ ...prev, warRoom }));
            Session.set(SessionKey.GAME_ROOM, warRoom);
        });
    };

    const handleUpdatePlayerName = (name: string) => {
        socket.emit("UpdatePlayerName", name, async (warRoom: WarRoomProps) => {
            setMultiplayerState((prev) => ({ ...prev, warRoom }));
            Session.set(SessionKey.GAME_ROOM, warRoom);
        });
    };

    const handleGameFilters = (filters: MovieFilters) => {
        socket.emit("UpdateGameFilters", filters, async (warRoom: WarRoomProps) => {
            setMultiplayerState((prev) => ({ ...prev, warRoom }));
            Session.set(SessionKey.GAME_ROOM, warRoom);
        });
    };

    const handleAddPlayerToRoom = (props: WarRoomProps) => {
        socket.emit("AddPlayerToRoom", props, async (warRooms: WarRooms, roomId: string) => {
            setMultiplayerState((prev) => ({ ...prev, warRooms }));
            Session.set(SessionKey.GAME_ROOM, roomId);
        });
    };

    return (
        <SocketContext.Provider
            value={{
                multiplayerState,
                setMultiplayerState,
                handleCreateNewRoom,
                handleSocketConnection,
                handleUpdatePlayerName,
                handleGameFilters,
            }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;
