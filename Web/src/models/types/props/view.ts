import { ChildernsProps } from ".";
import { Movie, VideoModel } from "../movie";

export type ViewImgProps = {
    src: string;
    alt: string;
    video: VideoModel | undefined;
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

export type ModalProps = ChildernsProps & {
    close: () => void;
    title: string;
};

export type BackdropProps = {
    close: () => void;
    showBackdrop: boolean;
};

export type PauseModalProps = {
    close: () => void;
};

export type GameOverModalProps = {
    close: () => void;
};

export type RoundEndModalProps = {
    close: () => void;
};
