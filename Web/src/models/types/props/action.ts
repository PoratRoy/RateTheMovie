import { ChildernsProps } from ".";
import { Player } from "../player";
import { Diraction, IconSize } from "../union";

export type CollapseProps = ChildernsProps & {
    isOpen: boolean;
};

export type TimerBarProps = {
    position?: "absolute" | "relative";
    activate: boolean;
    callback?: () => void;
};

export type CountDownProps = {
    closeTimer: () => void;
    time: number;
};

export type RankingBoardProps = {
    players: Player[];
};

export type ToggelArrowProps = {
    isOpen: boolean;
    handleOnClick: () => void;
    startDirection?: Diraction;
    endDirection?: Diraction;
    size?: IconSize;
};
