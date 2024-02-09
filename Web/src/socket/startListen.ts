import { Socket } from "socket.io-client";
import { ISocketContextActions } from "../context/SocketContext";
import { sendHandshake } from "./handshake";

export const startListeners = (
    socket: Socket<any, any>,
    SocketDispatch: (value: ISocketContextActions) => void,
) => {
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
        sendHandshake(socket, SocketDispatch);
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
