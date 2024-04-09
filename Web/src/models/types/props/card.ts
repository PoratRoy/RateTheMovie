import { ChildernsProps, IdProps } from ".";
import { Card } from "../card";
import { Movie } from "../movie";
import { Player } from "../player";
import { CardSize, StarSize, CardAnimation } from "../union";

export type CardProps = IdProps & {
    size?: CardSize;
    content: React.ReactNode;
    hasDecoration?: boolean;
    isFocus?: boolean;
    hasBorder?: boolean;
    index?: number;
    onClick?: () => void;
};

export type FlippedCardProps = IdProps & {
    card: Card;
    size?: CardSize;
    position: number | undefined;
    front: React.ReactNode;
    back: React.ReactNode;
    onClick?: () => void;
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
    openModal: (movie: Movie) => void;
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

export type PositionProps = IdProps & {
    position: number;
};

export type PositionRateStarProps = {
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
