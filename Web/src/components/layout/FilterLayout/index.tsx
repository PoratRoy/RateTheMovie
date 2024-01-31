import style from "./FilterLayout.module.css";
import { FieldValues, FormProvider, SubmitHandler } from "react-hook-form";
import { FilterLayoutProps } from "../../../models/types/props";
import PlayBtn from "../../actions/btn/PlayBtn";
import { DateDefaultJSON, FILTER_LAYOUT_ID, START_BTN_ID } from "../../../models/constants";
import { MovieFilters } from "../../../models/types/movie";
import { SessionKey } from "../../../models/enums/session";
import Session from "../../../utils/sessionStorage";
import { useNavigate } from "react-router-dom";
import path from "../../../router/routePath.json";
import useFirstRoundMovies from "../../../api/hooks/useFirstRoundMovies";
import { useState } from "react";

const FilterLayout = <TInput extends FieldValues>({
    children,
    methods,
}: FilterLayoutProps<TInput>) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { handleSubmit } = methods;
    const { firstRoundMovies } = useFirstRoundMovies();
    const navigate = useNavigate();

    const onSubmitFilter: SubmitHandler<TInput> = (data: TInput) => {
        setIsLoading(true);
        const { year, genre, country } = data;
        const filters: MovieFilters = {
            year: year ? JSON.parse(year) : DateDefaultJSON,
            genre: genre ? JSON.parse(genre) : [],
            country: country ? JSON.parse(country) : "",
        };
        Session.set(SessionKey.FILTERS, filters);
        firstRoundMovies(filters);
        setTimeout(() => {
            setIsLoading(false);
            navigate(path.game);
        }, 2000);
    };

    return (
        <FormProvider {...methods}>
            <form
                id={FILTER_LAYOUT_ID}
                className={style.filterForm}
                onSubmit={handleSubmit(onSubmitFilter)}
                noValidate
            >
                <div className={style.filterFormTitle}>Add some filters</div>
                <section className={style.filterFormContainer}>
                    <section className={style.filterFormChildrens}>{children}</section>
                </section>

                <section className={style.filterFormbtn}>
                    <PlayBtn id={START_BTN_ID} type="submit" title="Start" loading={isLoading} />
                </section>
            </form>
        </FormProvider>
    );
};

export default FilterLayout;
