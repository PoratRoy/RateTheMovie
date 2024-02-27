import { ChildernsProps, IdProps } from ".";
import { Card, placeholderCardType } from "../card";
import { Movie } from "../movie";
import { Player } from "../player";
import { CardSide, CardSize, StarSize } from "../union";

export type CardProps = IdProps & {
    size?: CardSize;
    type: placeholderCardType;
    isFocus?: boolean;
    flip?: boolean;
    front?: React.ReactNode;
    back?: React.ReactNode;
    position?: number;
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
    isRightChoice: boolean;
};

export type CardSliceProps = {
    side: CardSide;
    player: Player;
    index: number;
};

export type PlayerCardProps = {
    card: Card;
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
    isShadow?: boolean;
    side?: CardSide;
    size?: CardSize;
};

export type ShadowCardProps = {
    movie?: Movie;
};

export type CardImgShadowProps = {
    title: string;
};

export type ElectedCardProps = {
    index: number;
    player: Player;
    movie: Movie | undefined;
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

export type ElectedShadowProps = {
    isRightChoice: boolean;
};