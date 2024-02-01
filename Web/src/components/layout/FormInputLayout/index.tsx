import { FieldValues } from "react-hook-form";
import style from "./FormInputLayout.module.css";
import { FormInputLayoutProps } from "../../../models/types/props";

const FormInputLayout = <TInput extends FieldValues>({
    id,
    errors,
    children,
    height = "48px"
}: FormInputLayoutProps<TInput>) => {
    return (
        <section className={style.formInputContainer} style={{height}}>
            {children}
            {errors && errors[id] && (
                <span className={style.formInputErrorMsg}>{errors[id]?.message as string}</span>
            )}
        </section>
    );
};

export default FormInputLayout;
