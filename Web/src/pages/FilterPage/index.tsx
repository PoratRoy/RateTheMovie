import React from "react";
import { useNavigate } from "react-router-dom";
import path from "../../router/routePath.json";
import { SelectInputSchema } from "../../models/types/inputSchema";
import useInitialForm from "../../hooks/useInitialForm";
import { initSelectDefaultValues } from "../../models/initialization/input";
import { SubmitHandler } from "react-hook-form";
import FilterFormLayout from "../../components/layout/form/FilterFormLayout";
import { filterInputs } from "../../models/initialization/form";
import DateRangeInput from "../../components/actions/input/DateRangeInput";
import { useMovieContext } from "../../context/MovieContext";
import { MovieFilters } from "../../models/types/movie";
import GenreInput from "../../components/actions/input/GenreInput";
import CountryInput from "../../components/actions/input/CountryInput";
import { DateDefaultJSON } from "../../models/constants";

const FilterPage: React.FC = () => {
    const navigate = useNavigate();
    const { setFilters } = useMovieContext();
    const methods = useInitialForm<SelectInputSchema>(initSelectDefaultValues);
    const { setValue } = methods;

    const onSubmit: SubmitHandler<SelectInputSchema> = (data: SelectInputSchema) => {
        const { year, genre, country } = data;

        const movieFilters: MovieFilters = {
            year: JSON.parse(year || DateDefaultJSON),
            genre: JSON.parse(genre || "[]"),
            country: JSON.parse(country || ""),
        };
        setFilters(movieFilters);
        navigate(path.game);
    };

    return (
        <FilterFormLayout methods={methods} onSubmit={onSubmit} isLoading={false}>
            <DateRangeInput id={filterInputs.year.id} setValue={setValue} />
            <GenreInput
                id={filterInputs.genre.id}
                placeholder={filterInputs.genre.placeholder}
                setValue={setValue}
            />
            <CountryInput
                id={filterInputs.country.id}
                placeholder={filterInputs.country.placeholder}
                setValue={setValue}
            />
        </FilterFormLayout>
    );
};

export default FilterPage;
