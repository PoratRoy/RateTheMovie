import style from "./SetupLayout.module.css";
import { FieldValues, FormProvider } from "react-hook-form";
import { SetupLayoutProps } from "../../../models/types/props/layout";
import useOnSubmitSetup from "../../../hooks/form/useOnSubmitSetup";
import { DisplayFlex, DisplayNone } from "../../../style/style";
import { SETUP_ID } from "../../../models/constant/ids";

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
                style={playerRole === "host" ? DisplayNone : DisplayFlex}
                noValidate
            >
                {children}
            </form>
        </FormProvider>
    );
};

export default SetupLayout;
