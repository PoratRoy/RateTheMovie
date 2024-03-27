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
                <AnimationContextProvider>
                    <SocketContextProvider>
                        <DndContextProvider>{children}</DndContextProvider>
                    </SocketContextProvider>
                </AnimationContextProvider>
            </GamePlayContextProvider>
        </ErrorContextProvider>
    );
};

export default Providers;
