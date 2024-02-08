import { createContext, useContext } from "react";
import { Socket, io } from "socket.io-client";
import { useSocket } from "../hooks/context/useSocket";
//https://github.com/joeythelantern/Socket-IO-Basics/tree/master


export const SocketContext = createContext<{ socket: Socket }>({
    socket: io({ autoConnect: false }) as Socket,
});

export const useSocketContext = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: { children: React.ReactNode }) => {
    const socket = useSocket('http://localhost:8080/game', {
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        autoConnect: false,
    });

    // return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export default SocketContextProvider;
