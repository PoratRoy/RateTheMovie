import { IdProps } from ".";
import { Player } from "../player";
import { CardSize, LogoSize } from "../union";

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
};

export type BackLinkProps = {
    link?: string;
    callback?: () => void;
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
}

export type RankingBoardProps = {
    players: Player[];
};