import style from "./SetupLayout.module.css";
import { FieldValues, FormProvider } from "react-hook-form";
import { SETUP_ID } from "../../../models/constant";
import { SetupLayoutProps } from "../../../models/types/props/layout";
import useOnSubmitSetup from "../../../hooks/form/useOnSubmitSetup";

const SetupLayout = <TInput extends FieldValues>({
    setupOption,
    playerRole,
    children,
    methods,
}: SetupLayoutProps<TInput>) => {
    const { handleSubmit } = methods;
    const { onSubmitForm } = useOnSubmitSetup(setupOption, playerRole);

    return (
        <FormProvider {...methods}>
            <form
                id={SETUP_ID}
                className={style.setupContainer}
                onSubmit={handleSubmit(onSubmitForm)}
                // TODOCSS: refactor it
                style={
                    playerRole === "host"
                        ? { display: "none", opacity: 0 }
                        : {
                              opacity: 1,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                          }
                }
                noValidate
            >
                {children}
            </form>
        </FormProvider>
    );
};

export default SetupLayout;
