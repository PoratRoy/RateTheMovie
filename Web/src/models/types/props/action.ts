import { ChildernsProps } from ".";
import { Diraction, IconSize } from "../union";

export type CollapseProps = ChildernsProps & {
    isOpen: boolean;
};

export type RoundTimerProps = {
    duration?: number;
};

export type ModalTimerProps = {
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

export type ToggleTopMoviesProps = {};
