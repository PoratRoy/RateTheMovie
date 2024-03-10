import { IdProps } from ".";
import { Player } from "../player";
import { CardSize, Diraction, IconSize, LogoSize } from "../union";

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
    description: string | React.ReactNode;
};

export type FooterProps = {
    link?: string;
    callback?: () => void;
    toClear?: boolean;
};

export type BackLinkProps = {
    link?: string;
    callback?: () => void;
    toClear?: boolean;
};

export type RoomLinkProps = {
    roomLink: string;
};

export type RoundTitleProps = {
    current: number;
    total: number;
};

export type CountDownProps = {
    closeTimer: () => void;
    time: number;
};

export type RankingBoardProps = {
    players: Player[];
};

export type ToggelArrowProps = {
    isOpen: boolean;
    handleOnClick: () => void;
    startDirection?: Diraction;
    endDirection?: Diraction;
    size?: IconSize;
};

export type HeaderProps = {
    activateTimer: boolean;
};

export type TitleProps = {
    title: string;
};
