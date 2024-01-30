import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { CountryInputProps } from "../../../../models/types/props";
import { FormSetValue } from "../../../../models/constants";
import { initCountryOption, initCountryOptions } from "../../../../utils/select";
import { SelectOption } from "../../../../models/types/select";
import SelectInput from "../../core/select/SelectInput";
import { Countries } from "../../../../models/countries";
import SelectLayout from "../../../layout/SelectLayout";

const CountryInput = <TInput extends FieldValues>({
    id,
    setValue,
    placeholder,
    label,
}: CountryInputProps<TInput>) => {
    const [countryOptions, setCountryOptions] = useState<SelectOption[]>([]);
    const [country, setCountry] = useState<string | undefined>(Countries[1].iso_3166_1);

    useEffect(() => {
        if (countryOptions.length === 0) {
            const options = initCountryOptions(Countries);
            setCountryOptions(options);
        }
    }, []);

    useEffect(() => {
        if (country) {
            setValue(id, JSON.stringify(country), FormSetValue);
        }
    }, [country]);

    return (
        <SelectLayout label={label}>
            <SelectInput
                placeholder={placeholder}
                setValue={setCountry}
                options={countryOptions}
                defaultValue={initCountryOption(Countries[1])}
            />
        </SelectLayout>
    );
};

export default CountryInput;
