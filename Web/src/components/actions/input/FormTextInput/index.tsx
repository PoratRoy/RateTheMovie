import { FieldValues, useFormContext } from "react-hook-form";
import style from "../../../core/FormInputLayout/FormInputLayout.module.css";
import { FormTextInputProps } from "../../../../models/types/props";
import FormInputLayout from "../../../layout/FormInputLayout";

const FormTextInput = <TInput extends FieldValues>({
    id,
    placeholder,
    type = "text",
}: FormTextInputProps<TInput>) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <FormInputLayout id={id} errors={errors}>
            <input
                className={`${style.formInput} ${errors[id] && style.formInputError}`}
                type={type}
                placeholder={placeholder}
                {...register(id)}
            />
        </FormInputLayout>
    );
};

export default FormTextInput;
