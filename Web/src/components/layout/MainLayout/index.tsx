import style from "./MainLayout.module.css";
import { FieldValues, FormProvider } from "react-hook-form";
import { MainLayoutProps } from "../../../models/types/props";
import PlayBtn from "../../actions/PlayBtn";
import Logo from "../../common/Logo";

const MainLayout = <TInput extends FieldValues>({
    children,
    onSubmit,
    methods,
    isLoading,
}: MainLayoutProps<TInput>) => {
    const { handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form className={style.gameForm} onSubmit={handleSubmit(onSubmit)} noValidate>
                <section className={style.gameFormFilters}>
                    <Logo />
                    <section className={style.gameFormChildrens}>{children}</section>
                </section>

                <section className={style.btnLayoutContainer}>
                    <PlayBtn title="PLAY" loading={isLoading} />
                </section>
            </form>
        </FormProvider>
    );
};

export default MainLayout;
