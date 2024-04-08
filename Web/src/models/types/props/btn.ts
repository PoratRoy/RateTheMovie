import { CloseProps, IdProps } from ".";
import { AdditionalBtns, BtnSize } from "../union";

type OnClickQProps = OnClickProps;

type OnClickProps = {
    onClicked: () => void;
};

export type PrimaryBtnProps = IdProps &
    OnClickQProps & {
        type?: "button" | "submit" | undefined;
        title: string;
        disabled?: boolean;
        size: BtnSize;
        loading?: boolean;
    };

export type PrimaryIconBtnProps = IdProps &
    OnClickQProps & {
        title: string | React.ReactNode;
        disabled?: boolean;
        size: BtnSize;
        loading?: boolean;
    };

export type SecondaryBtnProps = IdProps &
    OnClickQProps & {
        title: string | React.ReactNode;
        size?: BtnSize;
    };

export type MultiBtnProps = IdProps &
    OnClickProps & {
        title: string;
    };

export type PlayBtnProps = IdProps &
    OnClickQProps & {
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

export type CircleBtnProps = OnClickProps & {
    size?: BtnSize;
    Icon: React.ReactNode;
};

export type PauseBtnProps = OnClickProps;

export type NextRoundBtnProps = CloseProps;

export type StartGameBtnProps = OnClickProps & {
    id: string;
    title: string;
    loading?: boolean;
    type?: "button" | "submit";
};

export type QuitCircleBtnProps = CloseProps;

export type RestartBtnProps = CloseProps;

export type PlayAgainBtnProps = CloseProps;

export type QuitBtnProps = CloseProps;

export type ExitGameBtnProps = CloseProps;

export type RestartCircleBtnProps = CloseProps;

export type LeaderBoardCircleBtnProps = CloseProps;

export type CloseBtnProps = CloseProps;

export type ReturnBtnProps = CloseProps & {
    handleClose: () => void;
    type: AdditionalBtns;
};

export type CopyRoomLinkBtnProps = {
    roomLink: string;
};

export type EditAvatarBtnProps = OnClickProps;
