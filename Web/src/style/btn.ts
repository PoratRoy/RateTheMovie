import { BtnSize } from "../models/types/union";
import { BTN_HEIGHT_LARGE, BTN_HEIGHT_MEDIUM, BTN_HEIGHT_SMALL, BTN_WIDTH_LARGE, BTN_WIDTH_MEDIUM, BTN_WIDTH_SMALL } from "./root";

export const setSize = (size?: BtnSize) => {
    const height =
    size === "large"
        ? BTN_HEIGHT_LARGE
        : size === "medium"
          ? BTN_HEIGHT_MEDIUM
          : BTN_HEIGHT_SMALL;
    const width =
        size === "large" 
            ? BTN_WIDTH_LARGE 
            : size === "medium" 
                ? BTN_WIDTH_MEDIUM 
                : BTN_WIDTH_SMALL;

    return { height, width}
}