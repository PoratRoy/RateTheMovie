export const PACK_CARDS_NUM = 4;
export const DISCOVERD_MOVIES_NUM = 20;
export const ROUND_NUM = 5;

export const FormSetValue = {
    shouldDirty: true,
    shouldTouch: true,
    shouldValidate: true,
};

export const SinglePlayerRoom = "single-player-room";

export const DateStartYear = 1800;
export const DateEndYear = new Date().getFullYear();
export const DateDefaultJSON = '["1800","2023"]';

export const DefualtPlayerName = "Player 1";

export const DirectionMap: { [key: string]: number } = {
    "left-up": 90,
    "left-down": -90,
    "right-up": -90,
    "right-down": 90,
    "up-left": -90,
    "up-right": 90,
    "down-left": 90,
    "down-right": -90,
    "up-down": 180,
    "down-up": -180,
};
