import style from "./FilterFormLayout.module.css";
import { FieldValues, FormProvider } from "react-hook-form";
import { FilterFormLayoutProps } from "../../../../models/types/props";

const FilterFormLayout = <TInput extends FieldValues>({
    children,
    onSubmit,
    methods,
    isLoading,
}: FilterFormLayoutProps<TInput>) => {
    const { handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form className={style.filterForm} onSubmit={handleSubmit(onSubmit)} noValidate>
                <section className={style.filterFormChildrens}>{children}</section>

                <section className={style.btnLayoutContainer}>
                    {isLoading ? (
                        <div className={style.btnLayoutLoading}>Loading...</div>
                    ) : (
                        <input type="submit" className={style.btnLayout} value="Play!" />
                    )}
                </section>
            </form>
        </FormProvider>
    );
};

export default FilterFormLayout;
