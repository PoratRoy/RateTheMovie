import { GenreOptionFilter } from "../models/types/filter";
import { SelectOption } from "../models/types/select";

export const initOptions = (values: string[]): SelectOption[] => {
    const res = values.map((value: string): SelectOption => {
        return createOption(value, value);
    });
    return res;
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
