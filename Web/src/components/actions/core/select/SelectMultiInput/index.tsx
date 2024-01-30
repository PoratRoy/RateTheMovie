import Select, { SingleValue } from "react-select";
import selectStyles from "../../../../../style/select";
import { SelectMultiInputProps } from "../../../../../models/types/props";
import { SelectOption } from "../../../../../models/types/select";

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
            onChange={onSelectOptions}
        />
    );
};

export default SelectMultiInput;
