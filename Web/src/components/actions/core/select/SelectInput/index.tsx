import Select, { SingleValue } from "react-select";
import selectStyles from "../../../../../style/select";
import { SelectInputProps } from "../../../../../models/types/props";
import { SelectOption } from "../../../../../models/types/select";
import React, { useState } from "react";

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
            value={val}
        />
    );
};

export default SelectInput;
