import style from "./MultiLayout.module.css";
import { FieldValues, FormProvider, SubmitHandler } from "react-hook-form";
import { MultiLayoutProps } from "../../../models/types/props";
import { MULTI_LAYOUT_ID } from "../../../models/constants";
import { useState } from "react";
import RoomLink from "../../actions/RoomLink";

const MultiLayout = <TInput extends FieldValues>({
    children,
    methods,
}: MultiLayoutProps<TInput>) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { handleSubmit } = methods;

    const onSubmitMutliForm: SubmitHandler<TInput> = (data: TInput) => {
        setIsLoading(true);
        const { name } = data;
    };

    return (
        <FormProvider {...methods}>
            <form
                id={MULTI_LAYOUT_ID}
                className={style.multiForm}
                onSubmit={handleSubmit(onSubmitMutliForm)}
                noValidate
            >
                <RoomLink room="https://url"/>
                <section className={style.multiFormContainer}>
                    <section className={style.multiFormChildrens}>{children}</section>
                </section>
            </form>
        </FormProvider>
    );
};

export default MultiLayout;
