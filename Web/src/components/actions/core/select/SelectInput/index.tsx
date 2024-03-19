import Select, { SingleValue } from "react-select";
import selectStyles from "../../../../../style/select";
import { SelectOption } from "../../../../../models/types/select";
import React, { useState } from "react";
import { SelectInputProps } from "../../../../../models/types/props/input";

const SelectInput: React.FC<SelectInputProps> = ({ placeholder, setValue, options, defaultValue }) => {
    const [val, setVal] = useState<SelectOption>(defaultValue || options[0]);
    
    const onSelectOption = (newValue: unknown) => {
        const option = newValue as SingleValue<SelectOption>;
        if (option) {
            setVal(option);
            setValue(option.value);
        }
    };

    return (
        <Select
            defaultValue={defaultValue}
            options={options}
            styles={selectStyles}
            placeholder={placeholder}
            onChange={onSelectOption}
            isSearchable={false}
            value={val}
        />
    );
};

export default SelectInput;
