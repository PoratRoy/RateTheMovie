import { ChildernsProps, PropsObj } from ".";

export type DroppableProps = ChildernsProps & {
    droppableId: string;
    setFocus: React.Dispatch<React.SetStateAction<boolean>>;
};

export type DraggableProps = ChildernsProps & {
    draggableId: string;
    disabled?: boolean;
    args: PropsObj;
};
