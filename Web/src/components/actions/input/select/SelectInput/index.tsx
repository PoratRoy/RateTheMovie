import Select, { SingleValue } from "react-select";
import style from "./SelectInput.module.css";
import selectStyles from "../../../../../style/select";
import { SelectInputProps } from "../../../../../models/types/props";
import { FieldValues } from "react-hook-form";
import { FormSetValue } from "../../../../../models/constants";
import { SelectOption } from "../../../../../models/types/select";

const SelectInput = <TInput extends FieldValues>({
    id,
    placeholder,
    setValue,
    options,
    defaultValue,
}: SelectInputProps<TInput>) => {
    const onSelectOption = (newValue: unknown) => {
        const option = newValue as SingleValue<SelectOption>;
        if (option) {
            if (id) {
                setValue(id, JSON.stringify(option), FormSetValue);
            } else {
                setValue(option);
            }
        }
    };

    return (
        <section className={style.selectTag}>
            <Select
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

export default SelectInput;
