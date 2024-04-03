import { FieldValues, useFormContext } from "react-hook-form";
import style from "./FromTextInput.module.css";
import InputLayout from "../../../../layout/InputLayout";
import { NameInputProps } from "../../../../../models/types/props/input";
import { motion } from "framer-motion";
import { useState } from "react";

const NameInput = <TInput extends FieldValues>({
    id,
    placeholder,
    type = "text",
}: NameInputProps<TInput>) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const [isFocused, setIsFocused] = useState<boolean>(false);

    const inputVariants = {
        focused: { width: "fit-content", padding: "0"},
        unfocused: { width: "40vw", padding: "0 10px"},
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <InputLayout id={id} errors={errors}>
            <motion.input
                className={`${style.inputText} ${errors[id] ? style.inputTextError : ""}`}
                type={type}
                placeholder={placeholder}
                onFocus={handleFocus}
                {...register(id)}
                maxLength={16}
                onBlur={handleBlur}
                variants={inputVariants}
                initial="unfocused"
                animate={isFocused ? "focused" : "unfocused"}
                transition={{ duration: 0.2 }}
            />
        </InputLayout>
    );
};

export default NameInput;
