import { FieldErrors, FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Movie } from "./movie";
import { SelectOption } from "./select";
import { Player } from "./player";
import React from "react";
import { BtnSize, CardSide, CardSize, InputType, LogoSize } from "./union";
import { Card, placeholderCardType } from "./card";

export type ChildernsProps = {
    children: React.ReactNode | React.ReactNode[];
};

export type ProvidersProps = ChildernsProps;

export type IdProps = {
    id?: string;
};

export type PropsObj<T = Record<string, any>> = {
    [key: string]: T;
};

//--Card--//
export type CardProps = IdProps & {
    size?: CardSize;
    type: placeholderCardType;
    isFocus?: boolean;
    flip?: boolean;
    front?: React.ReactNode;
    back?: React.ReactNode;
};

export type CardInnerContainerProps = {
    type: string;
    flip?: boolean;
    children: React.ReactNode[];
    isFocus: boolean | undefined;
};

export type ElectedCardWrapperProps = ChildernsProps & {
    rate: number | string;
    index: string;
    setFocus: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CardSliceProps = {
    side: CardSide;
    player: Player;
    index: number;
};

export type PlayerCardProps = {
    movie: Movie;
    loading?: boolean;
    player: Player;
};

export type ShadowPlayerCardProps = IdProps & {
    movie?: Movie;
};

export type DraggableMovieProps = {
    id: string;
    movie: Movie;
    player: Player;
    isHover?: boolean;
    isClickable?: boolean;
    side: CardSide;
    size?: CardSize;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ShadowCardProps = {
    movie?: Movie;
};

export type ElectedCardProps = {
    index: number;
    player: Player;
    card: Card | undefined;
};

export type PlaceholderProps = {
    type: placeholderCardType;
};

export type RateProps = IdProps & {
    rate: number | string;
};

export type PositionProps = IdProps & {
    position: number;
};

export type RateStarProps = {
    amount: number;
};

//--Pack--//
export type PackProps = ChildernsProps & {
    isWrap?: boolean;
};

export type PackOfCardsProps = {
    player: Player;
};

export type PackWrapperProps = ChildernsProps;

export type ElectedPackLayoutProps = ChildernsProps;

//--DND--//
export type DroppableProps = ChildernsProps & {
    droppableId: string;
    setFocus: React.Dispatch<React.SetStateAction<boolean>>;
};

export type DraggableProps = ChildernsProps & {
    draggableId: string;
    props: PropsObj;
};

//--Layout--//
export type FormLayoutProps<TInput extends FieldValues> = ChildernsProps & {
    methods: UseFormReturn<TInput, any, undefined>;
};

export type LandingLayoutProps = ChildernsProps & {
    isFilterLayout: boolean;
};

export type FilterLayoutProps<TInput extends FieldValues> = FormLayoutProps<TInput>;

export type MultiLayoutProps<TInput extends FieldValues> = FormLayoutProps<TInput>;

export type PlayerLayoutProps = {
    player: Player;
};

export type SelectLayoutProps = ChildernsProps & {
    label: string;
};

export type GameLayoutProps = ChildernsProps;

export type PlayersPackLayoutProps = ChildernsProps;

export type WaveLayoutProps = ChildernsProps;

export type CardViewLayoutProps = ChildernsProps & {
    close: () => void;
};

export type FormInputLayoutProps<TInput extends FieldValues> = ChildernsProps &
    InputProps<TInput> & {
        errors?: FieldErrors<FieldValues>;
        height?: string;
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

export type InputTypeProps = {
    type?: InputType;
};

export type FormTextInputProps<TInput extends FieldValues> = InputProps<TInput> &
    InputPlaceholderProps &
    InputTypeProps;

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

export type SwitchPlayersProps<TInput extends FieldValues> = InputProps<TInput> & FormSetValueProps;

//--Btn--//
export type PrimaryBtnProps = IdProps & {
    type?: "button" | "submit" | undefined;
    title: string;
    onClicked?: () => void;
    disabled?: boolean;
    size: BtnSize;
    loading?: boolean;
};

export type SecondaryBtnProps = IdProps & {
    title: string;
    onClicked?: () => void;
    onFocused?: boolean;
};

export type PlayerBtnProps = IdProps & {
    title: string;
    onFocused: boolean;
    onClicked: () => void;
};

export type PlayBtnProps = IdProps & {
    title: string;
    loading?: boolean;
    type?: "button" | "submit";
    onClicked?: () => void;
};

//--View--//
export type ViewImgProps = {
    src: string;
    alt: string;
};

export type CardViewProps = {
    movie: Movie;
    close: () => void;
};

export type CloseBtnProps = {
    close: () => void;
};

export type GenreProps = {
    genre: string;
};

//--Common--//
export type ImgProps = {
    src: string;
    alt: string;
    size?: CardSize;
    isShadow?: boolean;
};

export type ScoreProps = {
    score: number;
};

export type LogoProps = IdProps & {
    size?: LogoSize;
};

export type DescriptionProps = IdProps & {
    description: string;
};

export type FooterProps = {
    link?: string;
};

export type BackLinkProps = {
    link: string;
};

export type RoomLinkProps = {
    room: string;
};
