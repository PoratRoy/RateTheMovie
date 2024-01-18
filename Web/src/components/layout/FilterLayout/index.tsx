import style from "./FilterLayout.module.css";
import { FieldValues, FormProvider } from "react-hook-form";
import { FilterLayoutProps } from "../../../models/types/props";
import PlayBtn from "../../actions/btn/PlayBtn";
import { FILTER_LAYOUT_ID } from "../../../models/constants";

const FilterLayout = <TInput extends FieldValues>({
    children,
    onSubmit,
    methods,
    isLoading,
}: FilterLayoutProps<TInput>) => {
    const { handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form
                id={FILTER_LAYOUT_ID}
                className={style.filterForm}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <section className={style.filterFormContainer}>
                    <section className={style.filterFormChildrens}>{children}</section>
                </section>

                <section className={style.filterFormbtn}>
                    <PlayBtn title="Start" loading={isLoading} />
                </section>
            </form>
        </FormProvider>
    );
};

export default FilterLayout;
