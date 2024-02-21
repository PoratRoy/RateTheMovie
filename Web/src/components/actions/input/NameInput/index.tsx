import { FieldValues, useFormContext } from "react-hook-form";
import style from "./FromTextInput.module.css";
import { NameInputProps } from "../../../../models/types/props";
import InputLayout from "../../../layout/InputLayout";

const NameInput = <TInput extends FieldValues>({
    id,
    placeholder,
    label,
    type = "text",
}: NameInputProps<TInput>) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <InputLayout label={label} id={id} errors={errors}>
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
