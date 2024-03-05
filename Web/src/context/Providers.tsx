import React from "react";
import { ProvidersProps } from "../models/types/props";
import { ErrorContextProvider } from "./ErrorContext";
import { GamePlayContextProvider } from "./GamePlayContext";
import { DndContextProvider } from "./DndContext";
import SocketContextProvider from "./SocketContext";
import { AnimationContextProvider } from "./AnimationContext";

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <ErrorContextProvider>
            <GamePlayContextProvider>
                <SocketContextProvider>
                    <AnimationContextProvider>
                        <DndContextProvider>{children}</DndContextProvider>
                    </AnimationContextProvider>
                </SocketContextProvider>
            </GamePlayContextProvider>
        </ErrorContextProvider>
    );
};

export default Providers;
