import { FieldValues, Path, SubmitHandler, UseFormReturn } from "react-hook-form";
import { Movie } from "./movie";
import { SelectOption } from "./select";
import { Player } from "./player";
import React from "react";
import { AnimationScope } from "framer-motion";
import { BtnSize, CardSide } from "./union";
import { placeholderCardType } from "./card";

export type ChildernsProps = {
    children: React.ReactNode | React.ReactNode[];
};

export type ProvidersProps = ChildernsProps;

//--Card--//
export type CardProps = {
    id?: string;
    type: placeholderCardType
    width?: number;
    height?: number;
    isFocus?: boolean;
    isAnimate?: boolean;
    flip?: boolean;
    front?: React.ReactNode;
    back?: React.ReactNode;
};

export type CardInnerContainerProps = {
    isAnimate?: boolean;
    flip?: boolean;
    children: React.ReactNode[];
    isFocus: boolean | undefined
};

export type ElectedCardWrapperProps = ChildernsProps & {
    above?: React.ReactNode;
    below?: React.ReactNode;
    scope: AnimationScope<any>;
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

export type ShadowPlayerCardProps = {
    movie?: Movie;
    id: string;
};

export type DraggableMovieProps = {
    id: string;
    movie: Movie;
    player: Player;
    isHover?: boolean;
    isClickable?: boolean;
    side: CardSide;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ShadowCardProps = {
    movie?: Movie;
};

export type ElectedCardProps = {
    index: number;
    players: Player[];
    correctMovie: Movie;
};

export type CardViewProps = {
    movie: Movie;
};

export type PlaceholderProps = {
    type: placeholderCardType
}

//--Pack--//
export type PackProps = ChildernsProps & {
    maxWidth?: string;
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

export type GameLayoutProps = ChildernsProps;

export type PlayersPackLayoutProps = ChildernsProps;

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
export type PrimaryBtnProps = {
    type?: "button" | "submit" | undefined;
    title: string;
    onClicked?: () => void;
    disabled?: boolean;
    size: BtnSize;
    loading?: boolean;
};

export type SecondaryBtnProps = {
    title: string;
    onClicked?: () => void;
    disabled?: boolean;
    loading?: boolean;
    onFocused?: boolean;
};

export type PlayerBtnProps = {
    title: string;
    onFocused: boolean;
    onClicked: () => void;
};

export type PlayBtnProps = {
    title: string;
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
