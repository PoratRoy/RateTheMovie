import React from "react";
import { ProvidersProps } from "../models/types/props";
import { MovieContextProvider } from "./MovieContext";
import { ErrorContextProvider } from "./ErrorContext";
import { GamePlayContextProvider } from "./GamePlayContext";
import { DndContextProvider } from "./DndContext";
import SocketContextProvider from "./SocketContext";

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <SocketContextProvider>
            <ErrorContextProvider>
                <GamePlayContextProvider>
                    <MovieContextProvider>
                        <DndContextProvider>{children}</DndContextProvider>
                    </MovieContextProvider>
                </GamePlayContextProvider>
            </ErrorContextProvider>
        </SocketContextProvider>
    );
};

export default Providers;
