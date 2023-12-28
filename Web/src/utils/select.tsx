import { CountryOption, SelectOption } from "../models/types/select";

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

export const createCountryOption = (countries: CountryOption[]): SelectOption[] => {
    const options: SelectOption[] = countries.map((country: CountryOption) => {
        return {
            label: (
                <div>
                    {country.emoji} - {country.name}
                </div>
            ),
            value: country.name,
        };
    });
    return options;
};
