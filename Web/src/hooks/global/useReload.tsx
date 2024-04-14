import { useEffect } from "react";

const useReload = (func: (event: any) => void, deps?: React.DependencyList | undefined) => {
    useEffect(() => {
        window.addEventListener("beforeunload", func);
        return () => {
            window.removeEventListener("beforeunload", func);
        };
    }, deps);
};

export default useReload;
