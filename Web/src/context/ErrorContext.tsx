import { createContext, useContext } from "react";
import { Store } from "react-notifications-component";

export const ErrorContext = createContext<{
    handleError: (error: Error | string | undefined) => void;
}>({
    handleError: () => {},
});

export const useErrorContext = () => useContext(ErrorContext);

export const ErrorContextProvider = ({ children }: { children: React.ReactNode }) => {
    const handleError = (error: Error | string | undefined) => {
        Store.addNotification({
            title: "Error",
            message: error?.toString() || "",
            type: "danger",
            insert: "bottom",
            container: "bottom-full",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 3000,
                onScreen: true,
            },
        });
    };

    return <ErrorContext.Provider value={{ handleError }}>{children}</ErrorContext.Provider>;
};
