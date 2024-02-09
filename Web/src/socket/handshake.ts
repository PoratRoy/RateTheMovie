import { Socket } from "socket.io-client";
import { ISocketContextActions } from "../context/SocketContext";

export const sendHandshake = async (
    socket: Socket<any, any>,
    SocketDispatch: (value: ISocketContextActions) => void,
) => {
    console.info("Sending handshake to server ...");

    socket.emit("handshake", async (uid: string, users: string[]) => {
        console.info("User handshake callback message received");
        SocketDispatch({ type: "update_users", payload: users });
        SocketDispatch({ type: "update_uid", payload: uid });
    });
};
