import { createContext, useContext } from "react";
import { useSocket } from "../hooks/context/useSocket";
import { WarRoomProps, WarRooms } from "../models/types/warRoom";
import Session from "../utils/sessionStorage";
import { SessionKey } from "../models/enums/session";
import { MovieFilters } from "../models/types/movie";
import { useGamePlayContext } from "./GamePlayContext";
import { SingelPlayerRoom } from "../models/constants";
//https://github.com/joeythelantern/Socket-IO-Basics/tree/master

export const SocketContext = createContext<{
    // multiplayerState: MultiplayerState;
    // setMultiplayerState: React.Dispatch<React.SetStateAction<MultiplayerState>>;
    handleSocketConnection: () => void;
    handleCreateNewRoom: () => void;
    handleUpdatePlayerName: (name: string) => void;
    handleGameFilters: (filters: MovieFilters) => void;
}>({
    // multiplayerState: initMultiplayerState,
    // setMultiplayerState: () => {},
    handleSocketConnection: () => {},
    handleCreateNewRoom: () => {},
    handleUpdatePlayerName: () => {},
    handleGameFilters: () => {},
});

export const useSocketContext = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: { children: React.ReactNode }) => {
    // const [multiplayerState, setMultiplayerState] =
    //     useState<MultiplayerState>(initMultiplayerState);

    const { setPlayers } = useGamePlayContext();

    const socket = useSocket("http://localhost:8080/game", {
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        autoConnect: false,
    });

    const handleSocketConnection = () => {
        socket.connect();
    };

    // setMultiplayerState((prev) => ({ ...prev, socket }));
    // setMultiplayerState((prev) => ({ ...prev, warRoom }));
    const handleCreateNewRoom = () => {
        handleSocketConnection();
        socket.emit("CreateNewRoom", async (warRoom: WarRoomProps) => {
            if (warRoom && warRoom.room) {
                const { players, room } = warRoom;
                Session.set(SessionKey.PLAYERS, players);
                Session.set(SessionKey.ROOM, room || SingelPlayerRoom);
                setPlayers(players);
            }
        });
    };

    const handleUpdatePlayerName = (name: string) => {
        socket.emit("UpdatePlayerName", name, async (warRoom: WarRoomProps) => {
            if (warRoom && warRoom.room) {
                const { players } = warRoom;
                Session.set(SessionKey.PLAYERS, players);
                setPlayers(players);
            }
        });
    };

    const handleGameFilters = (filters: MovieFilters) => {
        socket.emit("UpdateGameFilters", filters, async (warRoom: WarRoomProps) => {});
    };

    const handleAddPlayerToRoom = (props: WarRoomProps) => {
        socket.emit("AddPlayerToRoom", props, async (warRooms: WarRooms, roomId: string) => {
            Session.set(SessionKey.WAR_ROOM, roomId);
        });
    };

    return (
        <SocketContext.Provider
            value={{
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
