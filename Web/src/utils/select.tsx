import { CountryOptionFilter, GenreOptionFilter } from "../models/types/filter";
import { SelectOption } from "../models/types/select";

export const initOptions = (values: string[]): SelectOption[] => {
    const res = values.map((value: string): SelectOption => {
        return createOption(value, value);
    });
    return res;
};

export const initDateOption = (value: string): SelectOption => {
    return createOption(value, value);
};

export const initCountryOptions = (countries: CountryOptionFilter[]): SelectOption[] => {
    const options: SelectOption[] = countries.map((country: CountryOptionFilter) => {
        return initCountryOption(country);
    });
    return options;
};

export const initCountryOption = (country: CountryOptionFilter): SelectOption => {
    const { emoji, name, iso_3166_1 } = country;
    return createOption(`${emoji} - ${name}`, iso_3166_1);
};

export const initGenreOptions = (genres: GenreOptionFilter[]): SelectOption[] => {
    const options: SelectOption[] = genres.map((genre: GenreOptionFilter) => {
        const { name, id } = genre;
        return createOption(name, id.toString());
    });
    return options;
};

export const createOption = (label: string, value: string): SelectOption => {
    return {
        label: <div>{label}</div>,
        value,
    };
};
