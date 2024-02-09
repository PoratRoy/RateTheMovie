import { createContext, useContext, useReducer } from "react";
import { Socket } from "socket.io-client";
import { useSocket } from "../hooks/context/useSocket";
import { SocketReducer } from "../logic/SocketReducer";
import { sendHandshake } from "../socket/handshake";
import { startListeners } from "../socket/startListen";
//https://github.com/joeythelantern/Socket-IO-Basics/tree/master

export interface ISocketContextState {
    socket: Socket | undefined;
    uid: string;
    users: string[];
}

export const defaultSocketContextState: ISocketContextState = {
    socket: undefined,
    uid: "",
    users: [],
};

export type TSocketContextActions = "update_socket" | "update_uid" | "update_users" | "remove_user";
export type TSocketContextPayload = string | string[] | Socket;

export interface ISocketContextActions {
    type: TSocketContextActions;
    payload: TSocketContextPayload;
}

export interface ISocketContextProps {
    SocketState: ISocketContextState;
    SocketDispatch: React.Dispatch<ISocketContextActions>;
    handleSocketConnection: () => void;
}

const SocketContext = createContext<ISocketContextProps>({
    SocketState: defaultSocketContextState,
    SocketDispatch: () => {},
    handleSocketConnection: () => {},
});

export const useSocketContext = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: { children: React.ReactNode }) => {
    const socket = useSocket("http://localhost:8080/game", {
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        autoConnect: false,
    });

    const [SocketState, SocketDispatch] = useReducer(SocketReducer, defaultSocketContextState);

    const handleSocketConnection = () => {
        socket.connect();
        SocketDispatch({ type: "update_socket", payload: socket });
        startListeners(socket, SocketDispatch);
        sendHandshake(socket, SocketDispatch);
    }

    return (
        <SocketContext.Provider value={{ SocketState, SocketDispatch, handleSocketConnection }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;
