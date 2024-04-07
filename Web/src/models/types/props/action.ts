import { ChildernsProps } from ".";
import { Diraction, IconSize } from "../union";

export type CollapseProps = ChildernsProps & {
    isOpen: boolean;
};

export type TimerHeaderProps = {
    duration?: number;
};

export type TimerModalProps = {
    duration?: number;
    handleTimeOut: () => void;
};

export type CountDownProps = {
    closeTimer: () => void;
    time: number;
};

export type ToggleArrowProps = {
    isOpen: boolean;
    handleOnClick: () => void;
    startDirection?: Diraction;
    endDirection?: Diraction;
    size?: IconSize;
};

export type ToggleDifficultyProps = {};

export type ToggleTopMoviesProps = {};
