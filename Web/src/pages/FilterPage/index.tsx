import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import path from "../../router/routePath.json";
import { SelectInputSchema } from "../../models/types/inputSchema";
import useInitialForm from "../../hooks/useInitialForm";
import { initSelectDefaultValues } from "../../models/initialization/input";
import { SubmitHandler } from "react-hook-form";
import FilterFormLayout from "../../components/layout/form/FilterFormLayout";
import { filterInputs } from "../../models/initialization/form";
import { getYearsArray } from "../../utils/date";
import { initOptions } from "../../utils/select";
import DateRangeInput from "../../components/actions/input/DateRangeInput";
import { SelectOption } from "../../models/types/select";

const FilterPage: React.FC = () => {
    const navigate = useNavigate();
    const methods = useInitialForm<SelectInputSchema>(initSelectDefaultValues);
    const { setValue } = methods;
    const [yearOptions, setYearOptions] = useState<SelectOption[]>([]);

    useEffect(() => {
        if (yearOptions.length === 0) {
            const years = getYearsArray();
            const options = initOptions(years);
            setYearOptions(options);
        }
    }, []);

    const onSubmit: SubmitHandler<SelectInputSchema> = (data: SelectInputSchema) => {
        // const { year, genre, country } = data;
        console.log("year", data);
        // navigate(path.game);
    };

    return (
        <FilterFormLayout methods={methods} onSubmit={onSubmit} isLoading={false}>
            <DateRangeInput id={filterInputs.year.id} setValue={setValue} />
        </FilterFormLayout>
    );
};

export default FilterPage;
