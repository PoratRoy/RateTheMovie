export type SelectOption = {
    readonly value: string;
    readonly label: JSX.Element;
    action?: () => any;
};

export type CountryOption = {
    name: string;
    emoji: string;
    image: string;
};
