import { ChildernsProps } from ".";
import { Diraction, IconSize } from "../union";

export type CollapseProps = ChildernsProps & {
    isOpen: boolean;
};

export type TimerBarProps = {
    position?: "absolute" | "relative";
    activate: boolean;
    time?: number;
    callback?: () => void;
};

export type TimerHeaderProps = {
    time?: number;
};

export type TimerModalProps = {
    activate: boolean;
    time?: number;
    handleTimeOut: () => void
};

export type CountDownProps = {
    closeTimer: () => void;
    time: number;
};

export type ToggelArrowProps = {
    isOpen: boolean;
    handleOnClick: () => void;
    startDirection?: Diraction;
    endDirection?: Diraction;
    size?: IconSize;
};
