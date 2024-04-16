import { Path } from "react-hook-form";
import { InputType } from "./union";
import { SetupInputSchema } from "./setup";

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

export type SetupInputs = {
    name: InputTypeText<SetupInputSchema>;
    rounds: RootInputType<SetupInputSchema>;
    avatar: RootInputType<SetupInputSchema>;
    difficulty: RootInputType<SetupInputSchema>;
};
