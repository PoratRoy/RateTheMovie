import style from "./MultiLayout.module.css";
import { FieldValues, FormProvider, SubmitHandler } from "react-hook-form";
import { MultiLayoutProps } from "../../../models/types/props";
import { MULTI_LAYOUT_ID, MULTI_START_BTN_ID } from "../../../models/constants";
import { useState } from "react";
import PlayBtn from "../../actions/btn/PlayBtn";
import { LandingOpt } from "../../../models/enums/landing";
import { useSocketContext } from "../../../context/SocketContext";

const MultiLayout = <TInput extends FieldValues>({
    children,
    methods,
    setLayoutOption,
}: MultiLayoutProps<TInput>) => {
    const { handleUpdatePlayerName } = useSocketContext();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { handleSubmit } = methods;

    const onSubmitMutliForm: SubmitHandler<TInput> = (data: TInput) => {
        setIsLoading(true);
        const { name } = data;
        handleUpdatePlayerName(name);
        setLayoutOption(LandingOpt.MULTI_FILTER);
        setIsLoading(false);
    };

    return (
        <FormProvider {...methods}>
            <form
                id={MULTI_LAYOUT_ID}
                className={style.multiForm}
                onSubmit={handleSubmit(onSubmitMutliForm)}
                noValidate
            >
                <section className={style.multiFormChildrens}>{children}</section>

                <section className={style.multiFormbtn}>
                    <PlayBtn
                        id={MULTI_START_BTN_ID}
                        type="submit"
                        title="Start"
                        loading={isLoading}
                    />
                </section>
            </form>
        </FormProvider>
    );
};

export default MultiLayout;
