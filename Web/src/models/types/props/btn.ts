import { IdProps } from ".";
import { BtnSize } from "../union";

export type PrimaryBtnProps = IdProps & {
    type?: "button" | "submit" | undefined;
    title: string;
    onClicked?: () => void;
    disabled?: boolean;
    size: BtnSize;
    loading?: boolean;
};

export type PrimaryIconBtnProps = IdProps & {
    title: string | React.ReactNode;
    onClicked?: () => void;
    disabled?: boolean;
    size: BtnSize;
    loading?: boolean;
};

export type SecondaryBtnProps = IdProps & {
    title: string;
    onClicked?: () => void;
    size?: BtnSize;
};

export type MultiBtnProps = IdProps & {
    title: string;
    onClicked: () => void;
};

export type PlayBtnProps = IdProps & {
    title: string;
    loading?: boolean;
    type?: "button" | "submit";
    onClicked?: () => void;
};

export type FinishBtnProps = {
    isFinishPlacing: boolean;
};

export type EditProfileBtnProps = {
    onClicked: () => void;
};

export type PauseBtnProps = {
    onClicked: () => void;
};

export type ShuffleBtnProps = {
    close: () => void;
}

export type RestartBtnProps = {
    close: () => void;
}

export type QuitBtnProps = {
    close: () => void;
}

export type StartGameBtnProps = {
    loading: boolean;
}