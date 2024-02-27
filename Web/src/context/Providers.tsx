import React from "react";
import { ProvidersProps } from "../models/types/props";
import { ErrorContextProvider } from "./ErrorContext";
import { GamePlayContextProvider } from "./GamePlayContext";
import { DndContextProvider } from "./DndContext";
import SocketContextProvider from "./SocketContext";

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <ErrorContextProvider>
            <SocketContextProvider>
                <GamePlayContextProvider>
                    <DndContextProvider>{children}</DndContextProvider>
                </GamePlayContextProvider>
            </SocketContextProvider>
        </ErrorContextProvider>
    );
};

export default Providers;
