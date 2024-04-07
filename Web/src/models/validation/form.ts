import * as yup from "yup";
import errors from "../constant/validationErrors.json";

export const setupFormSchema = yup.object({
    name: yup.string().max(16, errors.name.max).required(errors.name.required),
    avatar: yup.string(),
    rounds: yup.string(),
    difficulty: yup.string(),
});
