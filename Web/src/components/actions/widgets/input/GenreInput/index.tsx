import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import SelectMultiInput from "../../../core/select/SelectMultiInput";
import { initGenreOptions } from "../../../../../utils/select";
import { Genres } from "../../../../../models/resources/ganres";
import { SelectOption } from "../../../../../models/types/select";
import InputLayout from "../../../../layout/InputLayout";
import { FormSetValue } from "../../../../../models/constant";
import { GenreInputProps } from "../../../../../models/types/props/input";

const GenreInput = <TInput extends FieldValues>({
    id,
    setValue,
    placeholder,
    label,
}: GenreInputProps<TInput>) => {
    const [genresOptions, setGenresOptions] = useState<SelectOption[]>([]);
    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {
        if (genresOptions.length === 0) {
            const options = initGenreOptions(Genres);
            setGenresOptions(options);
        }
    }, []);

    useEffect(() => {
        if (genres.length !== 0) {
            setValue(id, JSON.stringify(genres), FormSetValue);
        }
    }, [genres]);

    return (
        <InputLayout label={label} id={id}>
            <SelectMultiInput
                placeholder={placeholder}
                setValue={setGenres}
                options={genresOptions}
            />
        </InputLayout>
    );
};

export default GenreInput;
