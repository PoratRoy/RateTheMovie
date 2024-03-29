export type SelectOption = {
    readonly value: string;
    readonly label: JSX.Element;
    action?: () => any;
};

export type SelectRadio = {
    readonly value: string;
    readonly label: string;
};
