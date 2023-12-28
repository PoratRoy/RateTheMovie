import Select, { SingleValue } from "react-select";
import style from "./SelectMultiInput.module.css";
import selectStyles from "../../../../../style/select";
import { SelectMultiInputProps } from "../../../../../models/types/props";
import { FieldValues } from "react-hook-form";
import { FormSetValue } from "../../../../../models/constants";
import { SelectOption } from "../../../../../models/types/select";

const SelectMultiInput = <TInput extends FieldValues>({
    id,
    placeholder,
    setValue,
    options,
    defaultValue,
}: SelectMultiInputProps<TInput>) => {
    const onSelectOption = (newValue: unknown) => {
        const options = newValue as SingleValue<SelectOption[]>;
        if (options) {
            setValue(id, JSON.stringify(options), FormSetValue);
        }
    };

    return (
        <section className={style.selectTag}>
            <Select
                isMulti
                name={id}
                defaultValue={options[0]}
                options={options}
                styles={selectStyles}
                placeholder={placeholder}
                onChange={onSelectOption}
            />
        </section>
    );
};

export default SelectMultiInput;
