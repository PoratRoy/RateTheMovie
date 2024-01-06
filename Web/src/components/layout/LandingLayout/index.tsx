import style from "./LandingLayout.module.css";
import { FieldValues, FormProvider } from "react-hook-form";
import { LandingLayoutProps } from "../../../models/types/props";
import PlayBtn from "../../actions/btn/PlayBtn";
import Logo from "../../common/Logo";

const LandingLayout = <TInput extends FieldValues>({
    children,
    onSubmit,
    methods,
    isLoading,
}: LandingLayoutProps<TInput>) => {
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

export default LandingLayout;
