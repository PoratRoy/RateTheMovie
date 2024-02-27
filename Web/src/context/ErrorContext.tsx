import { createContext, useContext } from "react";
import { notification } from "../utils/error";

export const ErrorContext = createContext<{
    handleError: (error: Error | string | undefined) => void;
    handleAlert: (message: string) => void;
}>({
    handleError: () => {},
    handleAlert: () => {},
});

export const useErrorContext = () => useContext(ErrorContext);

export const ErrorContextProvider = ({ children }: { children: React.ReactNode }) => {
    const handleError = (error: Error | string | undefined) => {
        notification("Error", error?.toString() || "", "danger");
    };

    const handleAlert = (message: string) => {
        notification("Alert", message, "info");
    };

    return (
        <ErrorContext.Provider value={{ handleError, handleAlert }}>
            {children}
        </ErrorContext.Provider>
    );
};
