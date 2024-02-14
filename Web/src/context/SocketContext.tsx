import { createContext, useContext, useState } from "react";
import { useSocket } from "../hooks/context/useSocket";
import { initMultiplayerState } from "../models/initialization/context";
import { GameRoomProps, GameRooms } from "../models/types/gameRoom";
import { MultiplayerState } from "../models/types/multiplayer";
import Session from "../utils/sessionStorage";
import { SessionKey } from "../models/enums/session";
import { MovieFilters } from "../models/types/movie";
//https://github.com/joeythelantern/Socket-IO-Basics/tree/master

export const SocketContext = createContext<{
    multiplayerState: MultiplayerState;
    setMultiplayerState: React.Dispatch<React.SetStateAction<MultiplayerState>>;
    handleSocketConnection: () => void;
    handleUpdatePlayerName: (name: string) => void;
    handleGameFilters: (filters: MovieFilters) => void;
}>({
    multiplayerState: initMultiplayerState,
    setMultiplayerState: () => {},
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

        setMultiplayerState((prev) => ({ ...prev, socket }));
        socket.emit("CreateNewRoom", async (gameRoom: GameRoomProps) => {
            setMultiplayerState((prev) => ({ ...prev, gameRoom }));
            Session.set(SessionKey.GAME_ROOM, gameRoom);
        });
    };

    const handleUpdatePlayerName = (name: string) => {
        socket.emit("UpdatePlayerName", name, async (gameRoom: GameRoomProps) => {
            setMultiplayerState((prev) => ({ ...prev, gameRoom }));
            Session.set(SessionKey.GAME_ROOM, gameRoom);
        });
    };

    const handleGameFilters = (filters: MovieFilters) => {
        socket.emit("UpdateGameFilters", filters, async (gameRoom: GameRoomProps) => {
            setMultiplayerState((prev) => ({ ...prev, gameRoom }));
            Session.set(SessionKey.GAME_ROOM, gameRoom);
        });
    };

    const handleAddPlayerToRoom = (props: GameRoomProps) => {
        socket.emit("AddPlayerToRoom", props, async (gameRooms: GameRooms, roomId: string) => {
            setMultiplayerState((prev) => ({ ...prev, gameRooms }));
            Session.set(SessionKey.GAME_ROOM, roomId);
        });
    };

    return (
        <SocketContext.Provider
            value={{
                multiplayerState,
                setMultiplayerState,
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
