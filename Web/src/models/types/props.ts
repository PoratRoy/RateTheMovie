import { Movie } from "./movie";

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
