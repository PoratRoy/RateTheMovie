import { useEffect } from "react";
import { DefaultValues, FieldValues, Path, useForm as useHookForm } from "react-hook-form";

const useInitialForm = <TSchema extends FieldValues>(
    defaultValues?: DefaultValues<TSchema>,
    resetValues?: DefaultValues<TSchema>,
    defaultFocus?: Path<TSchema>,
) => {
    const methods = useHookForm<TSchema>({ defaultValues });

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
