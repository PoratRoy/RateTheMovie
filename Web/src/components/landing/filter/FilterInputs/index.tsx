import React from "react";
import GenreInput from "../../../actions/widgets/input/GenreInput";
import LanguageInput from "../../../actions/widgets/input/LanguageInput";
import DateRangeInput from "../../../actions/widgets/input/DateRangeInput";
import { setupInputs } from "../../../../models/initialization/form";
import { FilterInputsProps } from "../../../../models/types/props/input";

const FilterInputs: React.FC<FilterInputsProps> = ({ setValue }) => {
    return (
        <React.Fragment>
            <GenreInput
                id={setupInputs.genre.id}
                placeholder={setupInputs.genre.placeholder}
                label={setupInputs.genre.label}
                setValue={setValue}
            />
            <LanguageInput
                id={setupInputs.language.id}
                placeholder={setupInputs.language.placeholder}
                label={setupInputs.language.label}
                setValue={setValue}
            />
            <DateRangeInput
                id={setupInputs.year.id}
                label={setupInputs.year.label}
                setValue={setValue}
            />
        </React.Fragment>
    );
};

export default FilterInputs;
