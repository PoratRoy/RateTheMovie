import * as yup from "yup";
import errors from "../constant/validationErrors.json";

export const multiFormSchema = yup.object({
    name: yup.string().max(50, errors.name.max).required(errors.name.required),
});

export const setupFormSchema = yup.object({
    name: yup.string().max(50, errors.name.max).required(errors.name.required),
    avater: yup.string(),
    rounds: yup.string(),
    year: yup.string(),
    genre: yup.string(),
    language: yup.string(),
});
