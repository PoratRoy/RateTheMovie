import { GenreOptionFilter, LanguageOptionFilter } from "../models/types/filter";
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

export const initLanguageOptions = (countries: LanguageOptionFilter[]): SelectOption[] => {
    const options: SelectOption[] = countries.map((country: LanguageOptionFilter) => {
        return initLanguageOption(country);
    });
    return options;
};

export const initLanguageOption = (country: LanguageOptionFilter): SelectOption => {
    const { emoji, name, id } = country;
    return createOption(`${emoji} - ${name}`, id);
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
