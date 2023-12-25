import { createContext, useContext, useState } from "react";

export const ErrorContext = createContext<{
    error: Error | string | undefined;
    setError: React.Dispatch<React.SetStateAction<Error | string | undefined>>;
}>({
    error: undefined,
    setError: () => {},
});

export const useErrorContext = () => useContext(ErrorContext);

export const ErrorContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [error, setError] = useState<Error | string | undefined>();

    return <ErrorContext.Provider value={{ error, setError }}>{children}</ErrorContext.Provider>;
};
