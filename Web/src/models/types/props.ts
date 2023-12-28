import { FieldValues, Path, SubmitHandler, UseFormReturn } from "react-hook-form";
import { Movie } from "./movie";
import { SelectOption } from "./select";

export type ChildernsProps = {
    children: React.ReactNode | React.ReactNode[];
};

export type ProvidersProps = ChildernsProps;

export type PackProps = ChildernsProps & {
    maxWidth?: string;
};

export type CardProps = ChildernsProps & {
    width?: number;
    height?: number;
    onHover?: string;
    isShadow?: boolean;
};

export type ImgProps = {
    src: string;
    alt: string;
    height?: string;
};

export type MyCardProps = {
    movie: Movie;
    loading: boolean;
};

export type ShadowCardProps = {
    movie: Movie;
};

export type DroppableProps = ChildernsProps & {
    droppableId: string;
};

export type DraggableProps = ChildernsProps & {
    draggableId: string;
    index?: number;
    movie?: Movie;
};

export type SelectedCardProps = {
    movie?: Movie;
    index: string;
};

export type RightCardProps = {
    movie: Movie;
};

export type FormLayoutProps<TInput extends FieldValues> = ChildernsProps & {
    onSubmit: SubmitHandler<TInput>;
    methods: UseFormReturn<TInput, any, undefined>;
    isLoading: boolean;
};

export type FilterFormLayoutProps<TInput extends FieldValues> = FormLayoutProps<TInput>;

export type InputProps<TInput extends FieldValues> = {
    id?: Path<TInput>;
};

export type InputPlaceholderProps = {
    placeholder?: string;
};

export type SelectInputProps = InputPlaceholderProps & {
    // setValue: (name: FieldPath<TInput>, value: any, options?: SetValueConfig) => void;
    // setValue: UseFormSetValue<TInput>;
    setValue: any;
    options: SelectOption[];
    defaultValue?: string[];
};

export type SelectMultiInputProps = InputPlaceholderProps & {
    // setValue: (name: FieldPath<TInput>, value: any, options?: SetValueConfig) => void;
    // setValue: UseFormSetValue<TInput>;
    setValue: any;
    options: SelectOption[];
    defaultValue?: string[];
};

export type DateRangeInputProps<TInput extends FieldValues> = InputProps<TInput> & {
    setValue: any;
};

export type GenreInputProps<TInput extends FieldValues> = InputProps<TInput> &
    InputPlaceholderProps & {
        setValue: any;
    };

export type CountryInputProps<TInput extends FieldValues> = InputProps<TInput> &
    InputPlaceholderProps & {
        setValue: any;
    };
