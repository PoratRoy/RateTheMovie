import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import path from "../../router/routePath.json";
import { SelectOption } from "../../models/types/common";
import { SelectInputSchema } from "../../models/types/inputSchema";
import useInitialForm from "../../hooks/useInitialForm";
import { initSelectDefaultValues } from "../../models/initialization/input";
import { SubmitHandler } from "react-hook-form";
import FilterFormLayout from "../../components/layout/form/FilterFormLayout";
import SelectInput from "../../components/actions/SelectInput";
import { filterInputs } from "../../models/initialization/form";

const FilterPage: React.FC = () => {
    const navigate = useNavigate();
    const methods = useInitialForm<SelectInputSchema>(initSelectDefaultValues);
    const { setValue } = methods;
    const [options, setOptions] = useState<SelectOption[]>([]);

    const onSubmit: SubmitHandler<SelectInputSchema> = (data: SelectInputSchema) => {
        const { date, type, tags } = data;
        if (date) {
            navigate(path.game);
        }
    };

    return (
        <FilterFormLayout methods={methods} onSubmit={onSubmit} isLoading={false}>
            <SelectInput
                id={filterInputs.tags.id}
                placeholder={filterInputs.tags.placeholder}
                setValue={setValue}
                options={options}
            />
        </FilterFormLayout>
    );
};

export default FilterPage;
