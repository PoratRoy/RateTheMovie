import Select, { SingleValue } from "react-select";
import selectStyles from "../../../../../style/select";
import { SelectOption } from "../../../../../models/types/select";
import { SelectMultiInputProps } from "../../../../../models/types/props/input";

const SelectMultiInput: React.FC<SelectMultiInputProps> = ({
    placeholder,
    setValue,
    options,
    defaultValue,
}) => {
    const onSelectOptions = (newValue: unknown) => {
        const options = newValue as SingleValue<SelectOption[]>;
        if (options) {
            const values = options.map((option) => option.value);
            setValue(values);
        }
    };

    return (
        <Select
            isMulti
            defaultValue={defaultValue}
            options={options}
            styles={selectStyles}
            placeholder={placeholder}
            isSearchable={false}
            onChange={onSelectOptions}
        />
    );
};

export default SelectMultiInput;
