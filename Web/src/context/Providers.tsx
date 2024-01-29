import React from "react";
import { ProvidersProps } from "../models/types/props";
import { MovieContextProvider } from "./MovieContext";
import { ErrorContextProvider } from "./ErrorContext";
import { GamePlayContextProvider } from "./GamePlayContext";
import { DndContextProvider } from "./DndContext";

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <ErrorContextProvider>
            <GamePlayContextProvider>
                <MovieContextProvider>
                    <DndContextProvider>{children}</DndContextProvider>
                </MovieContextProvider>
            </GamePlayContextProvider>
        </ErrorContextProvider>
    );
};

export default Providers;
