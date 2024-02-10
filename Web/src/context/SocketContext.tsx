import { createContext, useContext, useState } from "react";
import { useSocket } from "../hooks/context/useSocket";
import { initMultiplayerState } from "../models/initialization/context";
import { MultiplayerState } from "../models/types/socket";
import { Player } from "../models/types/player";
//https://github.com/joeythelantern/Socket-IO-Basics/tree/master

export const SocketContext = createContext<{
    multiplayerState: MultiplayerState;
    setMultiplayerState: React.Dispatch<React.SetStateAction<MultiplayerState>>;
    handleSocketConnection: () => void;
}>({
    multiplayerState: initMultiplayerState,
    setMultiplayerState: () => {},
    handleSocketConnection: () => {},
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
        socket.emit("handshake", async (roomId: string, players: Player[]) => {
            console.info("User handshake callback message received");
            console.log("roomId: ", roomId);
            console.log("players: ", players);
        });
    };

    return (
        <SocketContext.Provider
            value={{ multiplayerState, setMultiplayerState, handleSocketConnection }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;
