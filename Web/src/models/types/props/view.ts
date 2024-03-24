import { ChildernsProps, CloseProps } from ".";
import { Movie, VideoModel } from "../movie";
import { AdditionalBtns } from "../union";

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
        closeBtnType?: AdditionalBtns;
    };

export type BackdropProps = CloseProps & {
    showBackdrop: boolean;
};

export type PauseModalProps = CloseProps;

export type GameOverModalProps = CloseProps;

export type RoundEndModalProps = CloseProps & {
    title: string;
    gameOver: boolean;
};

export type MultiRoundEndModalProps = CloseProps & {
    title: string;
    gameOver: boolean;
};

export type AdditionalBtnsProps = CloseProps & {
    btns: AdditionalBtns[];
};

export type PlayerScoreProps = {
    id?: string;
    score: number;
};
