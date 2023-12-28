import Select, { SingleValue } from "react-select";
import style from "./SelectInput.module.css";
import selectStyles from "../../../../../style/select";
import { SelectInputProps } from "../../../../../models/types/props";
import { SelectOption } from "../../../../../models/types/select";
import React from "react";

const SelectInput: React.FC<SelectInputProps> = ({ placeholder, setValue, options }) => {
    const onSelectOption = (newValue: unknown) => {
        const option = newValue as SingleValue<SelectOption>;
        if (option) {
            setValue(option.value);
        }
    };

    return (
        <section className={style.selectTag}>
            <Select
                defaultValue={options[0]}
                options={options}
                styles={selectStyles}
                placeholder={placeholder}
                onChange={onSelectOption}
            />
        </section>
    );
};

export default SelectInput;
