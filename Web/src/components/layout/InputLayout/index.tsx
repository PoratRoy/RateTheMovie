import { InputLayoutProps } from "../../../models/types/props";
import style from "./InputLayout.module.css";
import { FieldValues } from "react-hook-form";

const InputLayout = <TInput extends FieldValues>({
    children,
    label,
    id,
    errors,
}: InputLayoutProps<TInput>) => {
    return (
        <section className={style.formInputContainer}>
            <div className={style.formInputLabel}>{label}</div>
            <div className={style.formInput}>{children}</div>
            {errors && errors[id] && (
                <span className={style.formInputErrorMsg}>{errors[id]?.message as string}</span>
            )}
        </section>
    );
};

export default InputLayout;