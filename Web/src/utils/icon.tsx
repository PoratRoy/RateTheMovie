import { IoIosArrowDown, IoIosArrowForward, IoIosArrowBack, IoIosArrowUp } from "react-icons/io";
import { DirectionMap } from "../models/constant";

export const getStartIcon = (startDirection: string | undefined) => {
    if (startDirection === "up") {
        return <IoIosArrowUp />;
    } else if (startDirection === "down") {
        return <IoIosArrowDown />;
    } else if (startDirection === "left") {
        return <IoIosArrowBack />;
    } else if (startDirection === "right") {
        return <IoIosArrowForward />;
    }
};

export const getRotation = (
    startDirection: string | undefined,
    endDirection: string | undefined,
) => {
    if (!startDirection || !endDirection) return 0;
    const key = `${startDirection}-${endDirection}`;
    return DirectionMap[key] || 0;
};
