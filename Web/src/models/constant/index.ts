export const PACK_CARDS_NUM = 4;
export const DISCOVERD_MOVIES_NUM = 20;
export const ROUND_NUM = 5;
export const START_TIMER = 3;
export const SHUFFLE_ATTEMPT = 5;

export const FormSetValue = {
    shouldDirty: true,
    shouldTouch: true,
    shouldValidate: true,
};

export const START_GAME_TIME = 14000;
export const START_GAME_TIMER = START_TIMER * 1000 + 500;

export const GAME_TIME = 270;
export const MODAL_TIME = 240;

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
