import { FieldValues, Path, SubmitHandler, UseFormReturn } from "react-hook-form";
import { Movie } from "./movie";
import { SelectOption } from "./select";

export type ChildernsProps = {
    children: React.ReactNode | React.ReactNode[];
};

export type ProvidersProps = ChildernsProps;

export type PackProps = ChildernsProps & {
    width?: string;
};

export type CardProps = ChildernsProps & {
    width?: string;
    height?: string;
    onHover?: string;
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

export type SelectInputProps<TInput extends FieldValues> = InputProps<TInput> &
    InputPlaceholderProps & {
        // setValue: (name: FieldPath<TInput>, value: any, options?: SetValueConfig) => void;
        // setValue: UseFormSetValue<TInput>;
        setValue: any;
        options: SelectOption[];
        defaultValue?: string[];
    };

export type SelectMultiInputProps<TInput extends FieldValues> = InputProps<TInput> &
    InputPlaceholderProps & {
        // setValue: (name: FieldPath<TInput>, value: any, options?: SetValueConfig) => void;
        // setValue: UseFormSetValue<TInput>;
        setValue: any;
        options: SelectOption[];
        defaultValue?: string[];
    };

export type DateRangeInputProps<TInput extends FieldValues> = InputProps<TInput> & {
    setValue: any;
};
