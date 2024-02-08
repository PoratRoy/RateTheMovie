import { createContext, useContext, useEffect, useReducer } from "react";
import { Socket } from "socket.io-client";
import { useSocket } from "../hooks/context/useSocket";
import { SocketReducer } from "../logic/SocketReducer";
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
}

const SocketContext = createContext<ISocketContextProps>({
    SocketState: defaultSocketContextState,
    SocketDispatch: () => {},
});

export const useSocketContext = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: { children: React.ReactNode }) => {
    const socket = useSocket("http://localhost:8080/game", {
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        autoConnect: false,
    });

    const [SocketState, SocketDispatch] = useReducer(SocketReducer, defaultSocketContextState);

    useEffect(() => {
        socket.connect();
        SocketDispatch({ type: "update_socket", payload: socket });
        StartListeners();
        SendHandshake();
    }, []);

    const StartListeners = () => {
        /** Messages */
        socket.on("user_connected", (users: string[]) => {
            console.info("User connected message received");
            SocketDispatch({ type: "update_users", payload: users });
        });

        /** Messages */
        socket.on("user_disconnected", (uid: string) => {
            console.info("User disconnected message received");
            SocketDispatch({ type: "remove_user", payload: uid });
        });

        /** Connection / reconnection listeners */
        socket.io.on("reconnect", (attempt) => {
            console.info("Reconnected on attempt: " + attempt);
            SendHandshake();
        });

        socket.io.on("reconnect_attempt", (attempt) => {
            console.info("Reconnection Attempt: " + attempt);
        });

        socket.io.on("reconnect_error", (error) => {
            console.info("Reconnection error: " + error);
        });

        socket.io.on("reconnect_failed", () => {
            console.info("Reconnection failure.");
            alert(
                "We are unable to connect you to the chat service.  Please make sure your internet connection is stable or try again later.",
            );
        });
    };

    const SendHandshake = async () => {
        console.info("Sending handshake to server ...");

        socket.emit("handshake", async (uid: string, users: string[]) => {
            console.info("User handshake callback message received");
            SocketDispatch({ type: "update_users", payload: users });
            SocketDispatch({ type: "update_uid", payload: uid });
        });
    };

    return (
        <SocketContext.Provider value={{ SocketState, SocketDispatch }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;
