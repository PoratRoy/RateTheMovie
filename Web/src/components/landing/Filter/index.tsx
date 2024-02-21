import useInitialForm from "../../../hooks/useInitialForm";
import { filterInputs } from "../../../models/initialization/form";
import { initSelectDefaultValues } from "../../../models/initialization/input";
import { SelectInputSchema } from "../../../models/types/inputSchema";
import DateRangeInput from "../../actions/input/DateRangeInput";
import GenreInput from "../../actions/input/GenreInput";
import LanguageInput from "../../actions/input/LanguageInput";
import FilterLayout from "../../layout/FilterLayout";

const Filter: React.FC = () => {
    const methods = useInitialForm<SelectInputSchema>(undefined, initSelectDefaultValues);
    const { setValue } = methods;
    return (
        <FilterLayout<SelectInputSchema> methods={methods}>
            <GenreInput
                id={filterInputs.genre.id}
                placeholder={filterInputs.genre.placeholder}
                label={filterInputs.genre.label}
                setValue={setValue}
            />
            <LanguageInput
                id={filterInputs.language.id}
                placeholder={filterInputs.language.placeholder}
                label={filterInputs.language.label}
                setValue={setValue}
            />
            <DateRangeInput
                id={filterInputs.year.id}
                label={filterInputs.year.label}
                setValue={setValue}
            />
        </FilterLayout>
    );
};

export default Filter;
