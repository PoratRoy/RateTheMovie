import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { DateRangeInputProps } from "../../../../models/types/props";
import { DateEndYear, DateStartYear, FormSetValue } from "../../../../models/constants";
import SelectInput from "../../core/select/SelectInput";
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
    const [from, setFrom] = useState<string | undefined>();
    const [to, setTo] = useState<string | undefined>();

    const setOptions = (filter: DateRangeOptionFilter) => {
        const years = getYearsArray(filter);
        return initOptions(years);
    };

    useEffect(() => {
        let date = [DateStartYear.toString(), DateEndYear.toString()];

        if (fromOptions.length === 0 || to) {
            setFromOptions(setOptions({ end: parseInt(to || "") - 1 }));
        }
        if (toOptions.length === 0 || from) {
            setToOptions(setOptions({ start: parseInt(from || "") + 1 }));
        }

        if (from) date[0] = from;
        if (to) date[1] = to;

        setValue(id, JSON.stringify(date), FormSetValue);
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