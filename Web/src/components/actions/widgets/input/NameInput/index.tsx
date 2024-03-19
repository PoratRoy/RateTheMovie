import { FieldValues, useFormContext } from "react-hook-form";
import style from "./FromTextInput.module.css";
import InputLayout from "../../../../layout/InputLayout";
import { NameInputProps } from "../../../../../models/types/props/input";

const NameInput = <TInput extends FieldValues>({
    id,
    placeholder,
    type = "text",
}: NameInputProps<TInput>) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <InputLayout id={id} errors={errors}>
            <input
                className={`${style.inputText} ${errors[id] ? style.inputTextError : ""}`}
                type={type}
                placeholder={placeholder}
                {...register(id)}
            />
        </InputLayout>
    );
};

export default NameInput;
