import { useEffect, useState } from "react";

const useImgLoad = (obj: any, deps?: React.DependencyList | undefined) => {
    const [imageLoading, setImageLoading] = useState<boolean>(true);

    useEffect(() => {
        if (obj) {
            const image = new Image();
            image.onload = () => {
                setImageLoading(false);
            };
            image.src = obj || "";
            return () => {
                image.onload = null;
            };
        }
    }, deps);

    return { imageLoading };
};

export default useImgLoad;
