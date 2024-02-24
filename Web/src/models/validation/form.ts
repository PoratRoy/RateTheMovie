import * as yup from "yup";
import errors from "../constant/validationErrors.json";

export const setupFormSchema = yup.object({
    name: yup.string().max(30, errors.name.max).required(errors.name.required),
    avater: yup.string(),
    rounds: yup.string(),
    year: yup.string(),
    genre: yup.string(),
    language: yup.string(),
});
