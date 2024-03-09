import { ChildernsProps } from ".";

export type CollapseProps = ChildernsProps & {
    isOpen: boolean;
};

export type TimerBarProps = {
    position?: "absolute" | "relative";
    activate: boolean;
};
