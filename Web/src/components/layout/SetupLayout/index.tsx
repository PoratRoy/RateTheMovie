import style from "./SetupLayout.module.css";
import { FieldValues, FormProvider, SubmitHandler } from "react-hook-form";
import { SetupLayoutProps } from "../../../models/types/props";
import { SETUP_ID } from "../../../models/constants";

const SetupLayout = <TInput extends FieldValues>({
    children,
    methods,
}: SetupLayoutProps<TInput>) => {
    const { handleSubmit } = methods;

    const onSubmitMutliForm: SubmitHandler<TInput> = (data: TInput) => {
        console.log("data", data);
    };

    return (
        <FormProvider {...methods}>
            <form
                id={SETUP_ID}
                className={style.setupContainer}
                onSubmit={handleSubmit(onSubmitMutliForm)}
                noValidate
            >
                {children}
            </form>
        </FormProvider>
    );
};

export default SetupLayout;
