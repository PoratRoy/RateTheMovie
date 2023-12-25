import React from "react";
import { ProvidersProps } from "../models/types/props";
import { MovieContextProvider } from "./MovieContext";
import { ErrorContextProvider } from "./ErrorContext";

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <ErrorContextProvider>
            <MovieContextProvider>{children}</MovieContextProvider>
        </ErrorContextProvider>
    );
};

export default Providers;
