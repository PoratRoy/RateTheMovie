import React from "react";
import { ProvidersProps } from "../models/types/props";
import { MovieContextProvider } from "./MovieContext";
import { ErrorContextProvider } from "./ErrorContext";
import { CardsContextProvider } from "./CardsContext";
import { GamePlayContextProvider } from "./GamePlayContext";
import { DndContextProvider } from "./DndContext";

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <ErrorContextProvider>
            <CardsContextProvider>
                <GamePlayContextProvider>
                    <MovieContextProvider>
                        <DndContextProvider>{children}</DndContextProvider>
                    </MovieContextProvider>
                </GamePlayContextProvider>
            </CardsContextProvider>
        </ErrorContextProvider>
    );
};

export default Providers;
