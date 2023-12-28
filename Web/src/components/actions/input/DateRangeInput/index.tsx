import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { DateRangeInputProps } from "../../../../models/types/props";
import { FormSetValue } from "../../../../models/constants";
import SelectInput from "../select/SelectInput";
import { getYearsArray } from "../../../../utils/date";
import { initOptions } from "../../../../utils/select";
import { SelectOption } from "../../../../models/types/select";
import style from "./DateRangeInput.module.css";
import { DateRangeOptionFilter } from "../../../../models/types/filter";

const DateRangeInput = <TInput extends FieldValues>({
    id,
    setValue,
}: DateRangeInputProps<TInput>) => {
    const [fromOptions, setFromOptions] = useState<SelectOption[]>([]);
    const [toOptions, setToOptions] = useState<SelectOption[]>([]);
    const [from, setFrom] = useState<SelectOption | undefined>();
    const [to, setTo] = useState<SelectOption | undefined>();

    const setOptions = (filter: DateRangeOptionFilter) => {
        const years = getYearsArray(filter);
        return initOptions(years);
    };

    useEffect(() => {
        if (fromOptions.length === 0 || to?.value) {
            setFromOptions(setOptions({ end: parseInt(to?.value || "") - 1 }));
        }
        if (toOptions.length === 0 || from?.value) {
            setToOptions(setOptions({ start: parseInt(from?.value || "") + 1 }));
        }
    }, [to, from]);

    useEffect(() => {
        if (from) {
            console.log("from", from);
        }
        if (to) {
            console.log("to", to);
        }
        setValue(id, JSON.stringify("roy"), FormSetValue);
    }, [from, to]);

    return (
        <div className={style.dateRangeContainer}>
            <SelectInput placeholder="From Year" setValue={setFrom} options={fromOptions} />
            {" - "}
            <SelectInput placeholder="To Year" setValue={setTo} options={toOptions} />
        </div>
    );
};

export default DateRangeInput;
