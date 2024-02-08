import { Socket } from "socket.io-client";
import { ISocketContextActions, ISocketContextState } from "../context/SocketContext";

export const SocketReducer = (state: ISocketContextState, action: ISocketContextActions) => {
    console.log("Message recieved - Action: " + action.type + " - Payload: ", action.payload);

    switch (action.type) {
        case "update_socket":
            return { ...state, socket: action.payload as Socket };
        case "update_uid":
            return { ...state, uid: action.payload as string };
        case "update_users":
            return { ...state, users: action.payload as string[] };
        case "remove_user":
            return {
                ...state,
                users: state.users.filter((uid) => uid !== (action.payload as string)),
            };
        default:
            return state;
    }
};
