import { CloseProps, IdProps } from ".";
import { BtnSize } from "../union";

type OnClickQProps = {
    onClicked?: () => void;
};

type OnClickProps = {
    onClicked: () => void;
};

export type PrimaryBtnProps = IdProps & OnClickQProps & {
    type?: "button" | "submit" | undefined;
    title: string;
    disabled?: boolean;
    size: BtnSize;
    loading?: boolean;
};

export type PrimaryIconBtnProps = IdProps & OnClickQProps & {
    title: string | React.ReactNode;
    disabled?: boolean;
    size: BtnSize;
    loading?: boolean;
};

export type SecondaryBtnProps = IdProps & OnClickQProps &{
    title: string | React.ReactNode;
    size?: BtnSize;
};

export type MultiBtnProps = IdProps & OnClickProps & {
    title: string;
};

export type PlayBtnProps = IdProps & OnClickQProps & {
    title: string;
    loading?: boolean;
    type?: "button" | "submit";
};

export type FinishBtnProps = {
    isFinishPlacing: boolean;
};

export type EditProfileBtnProps = OnClickProps & {
    toggle: boolean;
};

export type RevealOrderBtnProps = OnClickProps;

export type CircleBtnProps = OnClickProps & {
    Icon: React.ReactNode;
};

export type PauseBtnProps = OnClickProps;

export type NextRoundBtnProps = CloseProps;

export type MoviesBtnProps = CloseProps;

export type StartGameBtnProps = OnClickProps & {
    loading: boolean;
};

export type QuitCircleBtnProps = CloseProps;

export type RestartBtnProps = CloseProps;

export type PlayAgainBtnProps = CloseProps;

export type QuitBtnProps = CloseProps;

export type RestartCircleBtnProps = CloseProps;

export type LeaderBoardCircleBtnProps = CloseProps;

export type ShuffleBtnProps = CloseProps;
