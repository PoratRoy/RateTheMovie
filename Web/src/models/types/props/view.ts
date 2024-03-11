import { ChildernsProps, CloseProps } from ".";
import { Movie, VideoModel } from "../movie";
import { PlayerRole } from "../union";

export type ViewImgProps = {
    src: string;
    alt: string;
    video: VideoModel | undefined;
};

export type CardViewProps = CloseProps & {
    movie: Movie;
};

export type GenreProps = {
    genre: string;
};

export type ModalProps = ChildernsProps &
    CloseProps & {
        title: string;
        hasCloseBtn?: boolean;
    };

export type BackdropProps = CloseProps & {
    showBackdrop: boolean;
};

export type PauseModalProps = CloseProps;

export type GameOverModalProps = CloseProps;

export type RoundEndModalProps = CloseProps;

export type MultiRoundEndModalProps = CloseProps;

export type AdditionalBtnsProps = CloseProps & {
    isSingle: boolean;
    isGameOver: boolean;
};

export type PlayerScoreProps = {
    id?: string;
    score: number;
};