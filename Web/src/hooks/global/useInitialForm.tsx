import { useEffect } from "react";
import * as yup from "yup";
import { DefaultValues, FieldValues, Path, useForm as useHookForm } from "react-hook-form";
import useYupValidationResolver from "./useYupValidationResolver";

const useInitialForm = <TSchema extends FieldValues>(
    schema?: yup.ObjectSchema<TSchema, yup.AnyObject, TSchema, "">,
    defaultValues?: DefaultValues<TSchema>,
    resetValues?: DefaultValues<TSchema>,
    defaultFocus?: Path<TSchema>,
) => {
    
    const resolver = useYupValidationResolver<TSchema>(schema);
    const methods = useHookForm<TSchema>({ defaultValues, resolver });

    const {
        reset,
        setFocus,
        formState: { isSubmitSuccessful },
    } = methods;

    useEffect(() => {
        if (defaultFocus) {
            setFocus(defaultFocus);
        }
    }, []);

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset(resetValues);
        }
    }, [isSubmitSuccessful]);

    return methods;
};

export default useInitialForm;
