import { FieldErrors, FieldValues, UseFormReturn } from "react-hook-form";
import { ChildernsProps, CloseProps, IdProps, OnClickProps } from ".";
import { SetupOption } from "../setup";
import { CardSize, PlayerRole } from "../union";
import { Player } from "../player";
import { ModOption } from "../../enums/game";
import { CrewModel } from "../movie";
import { InputProps } from "./input";

export type FormLayoutProps<TInput extends FieldValues> = ChildernsProps & {
    methods: UseFormReturn<TInput, any, undefined>;
};

export type LandingLayoutProps = ChildernsProps & {
    setupOption: SetupOption;
    setSetupOption: React.Dispatch<React.SetStateAction<SetupOption>>;
};

export type GuestLayoutProps = ChildernsProps;

export type SetupLayoutProps<TInput extends FieldValues> = FormLayoutProps<TInput> & {
    setupOption: SetupOption;
    playerRole: PlayerRole;
    setSetupOption?: React.Dispatch<React.SetStateAction<ModOption | undefined>>;
};

export type PlayerLayoutProps = {
    player: Player;
};

export type GameLayoutProps = ChildernsProps;

export type PlayersPackLayoutProps = ChildernsProps;

export type WaveLayoutProps = ChildernsProps;

export type CardViewLayoutProps = ChildernsProps & CloseProps;

export type InputLayoutProps<TInput extends FieldValues> = ChildernsProps &
    InputProps<TInput> & {
        errors?: FieldErrors<FieldValues>;
        label?: string;
    };

export type CrewImgProps = {
    src: string;
    alt: string;
};

export type CrewProps = {
    actors: CrewModel[];
    director: CrewModel | undefined;
};

export type ActorProps = {
    actor: CrewModel;
};

export type PreviewLayoutProps = ChildernsProps & {
    hasFooter?: boolean;
};

export type ElectedPackLayoutProps = {
    currentPlayer: Player;
};

export type CommonLayoutProps = ChildernsProps & {
    hasFooter?: boolean;
    onGoBack?: () => void;
};

export type ErrorLayoutProps = OnClickProps & {
    description: string;
    buttonText: string;
};

export type CardLayoutProps = ChildernsProps &
    IdProps & {
        size?: CardSize;
        onClick?: () => void;
    };
