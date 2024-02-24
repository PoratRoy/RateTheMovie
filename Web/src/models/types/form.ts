import { Path } from "react-hook-form";
import { MultiplayerInputSchema, SelectInputSchema, SetupInputSchema } from "./inputSchema";
import { InputType } from "./union";

export type RootInputType<TInput> = {
    id: Path<TInput>;
    type: InputType;
};

export type InputTypeText<TInput> = RootInputType<TInput> & {
    placeholder: string;
};

export type LabelTypeText = {
    label: string;
};

export type InputTypeSelect<TInput> = Omit<InputTypeText<TInput>, "type"> & LabelTypeText;

export type FilterInputs = {
    year: InputTypeSelect<SelectInputSchema>;
    genre: InputTypeSelect<SelectInputSchema>;
    language: InputTypeSelect<SelectInputSchema>;
};

export type MultiplayerInputs = {
    name: InputTypeSelect<MultiplayerInputSchema>;
};

export type SetupInputs = {
    name: InputTypeText<SetupInputSchema>;
    rounds: RootInputType<SetupInputSchema>;
    avater: RootInputType<SetupInputSchema>;
    year: InputTypeSelect<SelectInputSchema>;
    genre: InputTypeSelect<SelectInputSchema>;
    language: InputTypeSelect<SelectInputSchema>;
};
