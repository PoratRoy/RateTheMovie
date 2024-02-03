import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { LanguageInputProps } from "../../../../models/types/props";
import { FormSetValue } from "../../../../models/constants";
import { initLanguageOption, initLanguageOptions } from "../../../../utils/select";
import { SelectOption } from "../../../../models/types/select";
import SelectInput from "../../core/select/SelectInput";
import InputLayout from "../../../layout/InputLayout";
import { Language } from "../../../../models/language";

const LanguageInput = <TInput extends FieldValues>({
    id,
    setValue,
    placeholder,
    label,
}: LanguageInputProps<TInput>) => {
    const [languageOptions, setLanguageOptions] = useState<SelectOption[]>([]);
    const [language, setLanguage] = useState<string | undefined>(Language[1].id);

    useEffect(() => {
        if (languageOptions.length === 0) {
            const options = initLanguageOptions(Language);
            setLanguageOptions(options);
        }
    }, []);

    useEffect(() => {
        if (language) {
            setValue(id, JSON.stringify(language), FormSetValue);
        }
    }, [language]);

    return (
        <InputLayout label={label} id={id}>
            <SelectInput
                placeholder={placeholder}
                setValue={setLanguage}
                options={languageOptions}
                defaultValue={initLanguageOption(Language[1])}
            />
        </InputLayout>
    );
};

export default LanguageInput;
