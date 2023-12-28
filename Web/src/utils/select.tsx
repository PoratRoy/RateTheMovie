import { ContryOption, SelectOption } from "../models/types/select";

export const initOptions = (values: string[]): SelectOption[] => {
    const res = values.map((value: string): SelectOption => {
        return createOption(value);
    });
    return res;
};

export const createOption = (value: string): SelectOption => {
    return {
        label: <div>{value}</div>,
        value,
    };
};

export const createContryOption = (contries: ContryOption[]): SelectOption[] => {
    const options: SelectOption[] = contries.map((contry: ContryOption) => {
        return {
            label: (
                <div>
                    {contry.emoji} - {contry.name}
                </div>
            ),
            value: contry.name,
        };
    });
    return options;
};
