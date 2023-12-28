import Select, { SingleValue } from "react-select";
import style from "./SelectMultiInput.module.css";
import selectStyles from "../../../../../style/select";
import { SelectMultiInputProps } from "../../../../../models/types/props";
import { SelectOption } from "../../../../../models/types/select";

const SelectMultiInput: React.FC<SelectMultiInputProps> = ({ placeholder, setValue, options }) => {
    const onSelectOptions = (newValue: unknown) => {
        const options = newValue as SingleValue<SelectOption[]>;
        if (options) {
            const values = options.map((option) => option.value);
            setValue(values);
        }
    };

    return (
        <section className={style.selectTag}>
            <Select
                isMulti
                defaultValue={options[0]}
                options={options}
                styles={selectStyles}
                placeholder={placeholder}
                onChange={onSelectOptions}
            />
        </section>
    );
};

export default SelectMultiInput;
