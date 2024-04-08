import { IdProps } from ".";
import { CardSize, LogoSize, RatePosition } from "../union";

export type ImgProps = {
    src: string;
    alt: string;
    size?: CardSize;
    isShadow?: boolean;
};

export type ScoreProps = {
    score: number;
    isMotion?: boolean;
};

export type CardPointsProps = {
    score?: number;
    index: string;
    isRightChoice: boolean;
};

export type LogoProps = IdProps & {
    size?: LogoSize;
};

export type DescriptionProps = IdProps & {
    description: string | React.ReactNode;
};

export type FooterProps = {
    link?: string;
    callback?: () => void;
    toClear?: boolean;
    isFixed?: boolean;
};

export type RoundsNumberProps = {
    current: number;
    total: number;
};

export type HeaderProps = {};

export type TitleProps = {
    title: string;
};

export type RateProps = IdProps & {
    rate: number | string;
    position?: RatePosition;
};

export type OutOfProps = {
    current: number;
    total: number;
    isDisabled?: boolean;
};
