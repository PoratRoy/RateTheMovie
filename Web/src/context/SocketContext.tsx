import { createContext, useContext, useRef } from "react";
import { Socket, io } from "socket.io-client";

export type MySocket = Socket<SocketNamespace.ListenEvents, SocketNamespace.EmitEvents>;

export const SocketContext = createContext<{ socket: MySocket }>({
    socket: io({ autoConnect: false }) as Socket,
});

export const useSocketContext = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: { children: React.ReactNode }) => {
    const socketRef = useRef<MySocket>(io({ autoConnect: false }));

    return (
        <SocketContext.Provider value={{ socket: socketRef.current }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;
