import { useCallback } from "react";
import * as yup from "yup";

const useYupValidationResolver = <TRequest extends yup.AnyObject>(
    validationSchema?: yup.ObjectSchema<TRequest, yup.AnyObject, TRequest, "">,
) =>
    useCallback(
        async (data: TRequest) => {
            try {
                if(!validationSchema) return ({ values: data, errors: {} });
                
                const values = await validationSchema.validate(data, {
                    abortEarly: false,
                });

                return {
                    values,
                    errors: {},
                };
            } catch (errors: any) {
                return {
                    values: {},
                    errors: errors.inner.reduce(
                        (allErrors: any, currentError: any) => ({
                            ...allErrors,
                            [currentError.path]: {
                                type: currentError.type ?? "validation",
                                message: currentError.message,
                            },
                        }),
                        {},
                    ),
                };
            }
        },
        [validationSchema],
    );

export default useYupValidationResolver;
