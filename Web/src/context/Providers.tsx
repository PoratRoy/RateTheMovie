import React from "react";
import { ProvidersProps } from "../models/types/props";
import { ErrorContextProvider } from "./ErrorContext";
import { GamePlayContextProvider } from "./GamePlayContext";
import { DndContextProvider } from "./DndContext";
import SocketContextProvider from "./SocketContext";

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <SocketContextProvider>
            <ErrorContextProvider>
                <GamePlayContextProvider>
                    <DndContextProvider>{children}</DndContextProvider>
                </GamePlayContextProvider>
            </ErrorContextProvider>
        </SocketContextProvider>
    );
};

export default Providers;
