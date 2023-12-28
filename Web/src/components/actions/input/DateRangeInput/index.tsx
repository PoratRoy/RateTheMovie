import React, { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { DateRangeInputProps } from "../../../../models/types/props";
import { FormSetValue } from "../../../../models/constants";
import SelectInput from "../select/SelectInput";
import { getYearsArray } from "../../../../utils/date";
import { initOptions } from "../../../../utils/select";
import { SelectOption } from "../../../../models/types/select";

const DateRangeInput = <TInput extends FieldValues>({
    id,
    setValue,
}: DateRangeInputProps<TInput>) => {
    const [yearOptions, setYearOptions] = useState<SelectOption[]>([]);
    const [from, setFrom] = useState<SelectOption | undefined>();
    const [to, setTo] = useState<SelectOption | undefined>();

    useEffect(() => {
        if (yearOptions.length === 0) {
            const years = getYearsArray();
            const options = initOptions(years);
            setYearOptions(options);
        }
    }, []);

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
        <div>
            <SelectInput placeholder="From Year" setValue={setFrom} options={yearOptions} />
            <SelectInput placeholder="To Year" setValue={setTo} options={yearOptions} />
        </div>
    );
};

export default DateRangeInput;
