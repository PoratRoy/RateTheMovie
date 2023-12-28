export type SelectOption = {
    readonly value: string;
    readonly label: JSX.Element;
    action?: () => any;
};

export type ContryOption = {
    name: string;
    emoji: string;
    image: string;
};
