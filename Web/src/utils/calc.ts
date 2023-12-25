import { DISCOVERD_MOVIES_NUM } from "../models/constants";

export const getRandomNumber = (min: number = 1, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomArray = (length: number = DISCOVERD_MOVIES_NUM): number[] => {
    const array = Array.from({ length: length }, (_, index) => index);

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
};
