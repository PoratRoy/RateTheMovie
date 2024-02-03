import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { GenreInputProps } from "../../../../models/types/props";
import SelectMultiInput from "../../core/select/SelectMultiInput";
import { FormSetValue } from "../../../../models/constants";
import { initGenreOptions } from "../../../../utils/select";
import { Genres } from "../../../../models/ganres";
import { SelectOption } from "../../../../models/types/select";
import InputLayout from "../../../layout/InputLayout";

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
