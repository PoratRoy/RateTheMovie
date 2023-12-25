import React from "react";
import { ProvidersProps } from "../models/types/props";
import { MovieContextProvider } from "./MovieContext";
import { ErrorContextProvider } from "./ErrorContext";
import { CardsContextProvider } from "./CardsContext";

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <ErrorContextProvider>
            <CardsContextProvider>
                <MovieContextProvider>{children}</MovieContextProvider>
            </CardsContextProvider>
        </ErrorContextProvider>
    );
};

export default Providers;
