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

export const GAME_TIME = 40;
export const MODAL_TIME = 10;

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

//TODO: move to IDs file
export const CARD_ID = "card";
export const BELOW_ID = "below";
export const SHADOW_ID = "shadow";
export const POINTS_ID = "points";

export const PLAY_BTN_ID = "play-btn";
export const MULTIPLAYER_BTN_ID = "multiplayer-btn";
export const LOGO_ID = "logo";
export const DESCRIPTION_ID = "description";
export const MOVIES_POSTER_ID = "movies-poster";
export const WAVE_ID = "wave";

export const SETUP_ID = "setup";

export const DONE_BTN_ID = "done-btn";
export const START_BTN_ID = "start-btn";

export const DRAGGING_ID = "dragging";
export const DOUBLE_CLICK_ID = "double-click";
export const SHADOW_CARD_TITLE_ID = "shadow-card-title";

export const LOADING_START_BTN_ID = "loading-start-btn";

export const REVEAL_ACTION_ID = "reveal-action";
export const SCORE_ID = "score";
export const GAMEOVER_BOARD_ID = "gameover-board";
export const NEXT_ROUND_BTN_ID = "next-round-btn";
