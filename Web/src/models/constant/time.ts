import { PACK_CARDS_NUM } from ".";

export const SECOND_TIME = 1000;

export const START_TIMER = 3;

export const START_GAME_TIME = 14000;
export const START_GAME_TIMER = START_TIMER * 1000 + 500;

export const GAME_TIME = 20;
export const MODAL_TIME = 8;

export const FILP_CARD_TIME = 300;

export const DURATION_ANIMATION_1 = 0.1; //200ms
export const DURATION_ANIMATION_2 = 0.2; //200ms
export const DURATION_ANIMATION_3 = 0.3; //300ms
export const DURATION_ANIMATION_4 = 0.4; //300ms
export const DURATION_ANIMATION_5 = 0.5; //500ms
export const DURATION_ANIMATION_8 = 0.8; //800ms

export const DELAY_ANIMATION_3 = 300;
export const DELAY_ANIMATION_4 = 400;
export const DELAY_ANIMATION_30 = 3000;

// export const FINISH_ANIMATION_TIME = 3000 + PACK_CARDS_NUM * 1000;
export const FINISH_ANIMATION_TIME =
    SECOND_TIME * 2 +
    DURATION_ANIMATION_3 * 1000 +
    DURATION_ANIMATION_2 * 1000 +
    PACK_CARDS_NUM *
        (DURATION_ANIMATION_3 * 1000 +
            DELAY_ANIMATION_3 +
            DURATION_ANIMATION_8 * 1000 +
            DELAY_ANIMATION_4);
