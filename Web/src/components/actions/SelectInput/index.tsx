import Select, { SingleValue } from "react-select";
import style from "./SelectInput.module.scss";
import { SelectOption } from "../../../models/types/common";
import selectStyles from "../../../style/select";
import { SelectInputProps } from "../../../models/types/props";
import { FieldValues } from "react-hook-form";
import { FormSetValue } from "../../../models/constants";

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
            setValue(id, JSON.stringify(option.value), FormSetValue);
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
