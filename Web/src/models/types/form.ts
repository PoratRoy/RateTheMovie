import { Path } from "react-hook-form";
import { SelectInputSchema } from "./inputSchema";
import { InputType } from "./union";

export type RootInputType<TInput> = {
    id: Path<TInput>;
    type: InputType;
};

export type InputTypeText<TInput> = RootInputType<TInput> & {
    placeholder: string;
};

export type InputTypeSelect<TInput> = Omit<InputTypeText<TInput>, "type"> & {};

export type FilterInputs = {
    year: InputTypeSelect<SelectInputSchema>;
    genre: InputTypeSelect<SelectInputSchema>;
    country: InputTypeSelect<SelectInputSchema>;
};