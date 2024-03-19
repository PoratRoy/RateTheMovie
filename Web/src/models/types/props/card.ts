import { ChildernsProps, IdProps } from ".";
import { CardAnimation } from "../../enums/animation";
import { Card, placeholderCardType } from "../card";
import { Movie } from "../movie";
import { Player } from "../player";
import { CardSize, StarSize } from "../union";

export type CardProps = IdProps & {
    size?: CardSize;
    type: placeholderCardType;
    isFocus?: boolean;
    front?: React.ReactNode;
    back?: React.ReactNode;
    position?: number;
};

export type CardInnerContainerProps = {
    type: placeholderCardType;
    children: React.ReactNode[];
    isFocus: boolean | undefined;
};

export type ElectedCardWrapperProps = ChildernsProps & {
    rate: number | string;
    index: string;
    setFocus: React.Dispatch<React.SetStateAction<boolean>>;
    isRightChoice: boolean;
};

export type ResultCardWrapperProps = ChildernsProps & {
    rate?: number | string;
    isRightChoice: boolean;
};

export type PlayerCardProps = {
    card: Card;
    player: Player;
};

export type PreviewCardProps = {
    movie: Movie;
};

export type ShadowCardProps = {
    movie?: Movie;
};

export type CardImgShadowProps = {
    title: string;
    actions: CardAnimation[];
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
    size?: StarSize;
};

export type ElectedShadowProps = IdProps & {
    isRightChoice: boolean;
};

export type ResultCardProps = {
    player: Player;
    card: Card | undefined;
    index: number;
    showRate?: boolean;
    size?: CardSize;
};
