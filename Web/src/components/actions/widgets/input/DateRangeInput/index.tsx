import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import SelectInput from "../../../core/select/SelectInput";
import { getYearsArray, subtractYears } from "../../../../../utils/date";
import { initDateOption, initOptions } from "../../../../../utils/select";
import { SelectOption } from "../../../../../models/types/select";
import style from "./DateRangeInput.module.css";
import { DateRangeOptionFilter } from "../../../../../models/types/filter";
import InputLayout from "../../../../layout/InputLayout";
import { DateEndYear, DateStartYear, FormSetValue } from "../../../../../models/constant";
import { DateRangeInputProps } from "../../../../../models/types/props/input";

const DateRangeInput = <TInput extends FieldValues>({
    id,
    setValue,
    label,
}: DateRangeInputProps<TInput>) => {
    const [fromOptions, setFromOptions] = useState<SelectOption[]>([]);
    const [toOptions, setToOptions] = useState<SelectOption[]>([]);
    const [from, setFrom] = useState<string | undefined>(subtractYears().toString());
    const [to, setTo] = useState<string | undefined>(DateEndYear.toString());

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
        <InputLayout label={label} id={id}>
            <div className={style.dateRange}>
                <SelectInput
                    placeholder="From Year"
                    setValue={setFrom}
                    options={fromOptions}
                    defaultValue={initDateOption(subtractYears().toString())}
                />
                {" - "}
                <SelectInput
                    placeholder="To Year"
                    setValue={setTo}
                    options={toOptions}
                    defaultValue={initDateOption(DateEndYear.toString())}
                />
            </div>
        </InputLayout>
    );
};

export default DateRangeInput;
