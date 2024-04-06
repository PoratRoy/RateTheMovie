import { ChildernsProps, CloseProps } from ".";
import { Movie, VideoModel } from "../movie";
import { Player } from "../player";
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

export type ModalProps = ChildernsProps & {
    title: string;
    gameOver?: boolean;
};

export type BackdropProps = {
    showBackdrop: boolean;
};

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

export type MovieModalProps = {
    movie: Movie;
    close: () => void;
};

export type GameOverModalProps = {
    leaderBoardPlayers: Player[];
};

export type RoundModalProps = {
    leaderBoardPlayers: Player[];
    handleTimeOut: () => void;
};
