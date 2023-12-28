import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { GenreInputProps } from "../../../../models/types/props";
import SelectMultiInput from "../../core/select/SelectMultiInput";
import { FormSetValue } from "../../../../models/constants";
import { initGenreOptions } from "../../../../utils/select";
import { Genres } from "../../../../models/ganres";
import { SelectOption } from "../../../../models/types/select";

const GenreInput = <TInput extends FieldValues>({
    id,
    setValue,
    placeholder,
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
        <div>
            <SelectMultiInput
                placeholder={placeholder}
                setValue={setGenres}
                options={genresOptions}
            />
        </div>
    );
};

export default GenreInput;
