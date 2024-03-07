import { FieldErrors, FieldValues, UseFormReturn } from "react-hook-form";
import { ChildernsProps } from ".";
import { SetupOption } from "../setup";
import { PlayerRole } from "../union";
import { Player } from "../player";
import { ModOption } from "../../enums/landing";
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
    roomLink: string;
    playerRole: PlayerRole;
    setSetupOption?: React.Dispatch<React.SetStateAction<ModOption | undefined>>;
};

export type PlayerLayoutProps = {
    player: Player;
    cardLoading: boolean;
};

export type GameLayoutProps = ChildernsProps;

export type PlayersPackLayoutProps = ChildernsProps;

export type WaveLayoutProps = ChildernsProps;

export type CardViewLayoutProps = ChildernsProps & {
    close: () => void;
};

export type InputLayoutProps<TInput extends FieldValues> = ChildernsProps &
    InputProps<TInput> & {
        errors?: FieldErrors<FieldValues>;
        label?: string;
    };

export type CardEventLayoutProps = ChildernsProps & {
    setOpenCardView: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenShadow: React.Dispatch<React.SetStateAction<boolean>>;
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