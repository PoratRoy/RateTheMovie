import { FieldValues, Path, SubmitHandler, UseFormReturn } from "react-hook-form";
import { Movie } from "./movie";
import { SelectOption } from "./select";
import { Player } from "./player";

export type ChildernsProps = {
    children: React.ReactNode | React.ReactNode[];
};

export type ProvidersProps = ChildernsProps;

//--Card--//
export type CardProps = {
    width?: number;
    height?: number;
    isFocus?: boolean;
    flip?: boolean;
    front?: React.ReactNode;
    back?: React.ReactNode;
};

export type CardSliceProps = {
    side: "left" | "right" | "all";
    player: Player;
    index: number;
};

export type MyCardProps = {
    movie: Movie;
    loading?: boolean;
    player: Player;
};

export type DraggableMovieProps = {
    movie: Movie;
    player: Player;
    isHover: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ShadowCardProps = {
    movie?: Movie;
};

export type SelectedCardProps = {
    index: number;
    players: Player[];
    correctMovie: Movie;
};

export type CardViewProps = {
    movie: Movie;
};

//--Pack--//
export type PackProps = ChildernsProps & {
    maxWidth?: string;
};

export type PackOfCardsProps = {
    player: Player;
};

//--DND--//
export type DroppableProps = ChildernsProps & {
    droppableId: string;
    setFocus: React.Dispatch<React.SetStateAction<boolean>>
};

export type DraggableProps = ChildernsProps & {
    draggableId: string;
    index?: number;
    movie?: Movie;
    player?: Player;
};

//--Layout--//
export type FormLayoutProps<TInput extends FieldValues> = ChildernsProps & {
    onSubmit: SubmitHandler<TInput>;
    methods: UseFormReturn<TInput, any, undefined>;
    isLoading: boolean;
};

export type LandingLayoutProps<TInput extends FieldValues> = FormLayoutProps<TInput>;

export type PlayerLayoutProps = {
    player: Player;
};

export type SelectLayoutProps = ChildernsProps & {
    label: string;
};

//--Input--//
export type InputProps<TInput extends FieldValues> = {
    id: Path<TInput>;
};

export type InputPlaceholderProps = {
    placeholder?: string;
};

export type InputLabelProps = {
    label: string;
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

export type CountryInputProps<TInput extends FieldValues> = InputProps<TInput> &
    InputPlaceholderProps &
    InputLabelProps &
    FormSetValueProps;

export type SwitchPlayersProps<TInput extends FieldValues> = InputProps<TInput> & FormSetValueProps;

//--Btn--//
export type PlayerBtnProps = {
    title: string;
    onFocused: boolean;
    onClicked: () => void;
};

export type PlayBtnProps = {
    title: string;
    width?: number | string;
    height?: number | string;
    loading: boolean;
};

//--Common--//
export type ImgProps = {
    src: string;
    alt: string;
    height?: string;
    isShadow?: boolean;
};

export type ScoreProps = {
    score: number;
};

export type LogoProps = {
    width?: number | string;
};
