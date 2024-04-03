import { FieldValues, Path } from "react-hook-form";
import { InputType } from "../union";
import { SelectOption } from "../select";

export type InputProps<TInput extends FieldValues> = {
    id: Path<TInput>;
};

export type InputPlaceholderProps = {
    placeholder?: string;
};

export type InputLabelProps = {
    label: string;
};

export type InputTypeProps = {
    type?: InputType;
};

export type FormSetValueProps = {
    // setValue: (name: FieldPath<TInput>, value: any, options?: SetValueConfig) => void;
    // setValue: UseFormSetValue<TInput>;
    setValue: any;
};

export type SelectInputProps = InputPlaceholderProps & {
    setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
    options: SelectOption[];
    defaultValue?: SelectOption;
};

export type SelectMultiInputProps = InputPlaceholderProps & {
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
    options: SelectOption[];
    defaultValue?: SelectOption;
};

export type DateRangeInputProps<TInput extends FieldValues> = InputProps<TInput> &
    InputLabelProps &
    FormSetValueProps;

export type GenreInputProps<TInput extends FieldValues> = InputProps<TInput> &
    InputPlaceholderProps &
    InputLabelProps &
    FormSetValueProps;

export type LanguageInputProps<TInput extends FieldValues> = InputProps<TInput> &
    InputPlaceholderProps &
    InputLabelProps &
    FormSetValueProps;

export type NameInputProps<TInput extends FieldValues> = InputProps<TInput> &
    InputPlaceholderProps &
    InputTypeProps;

export type RoundInputProps<TInput extends FieldValues> = InputProps<TInput> & FormSetValueProps;

export type AvatarSwiperProps<TInput extends FieldValues> = InputProps<TInput> &
    FormSetValueProps & {
        defualt: number;
        setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
    };

export type FilterInputsProps = FormSetValueProps;
