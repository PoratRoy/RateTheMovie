import style from "./FilterLayout.module.css";
import { FieldValues, FormProvider, SubmitHandler } from "react-hook-form";
import { FilterLayoutProps } from "../../../models/types/props";
import PlayBtn from "../../actions/btn/PlayBtn";
import { DateDefaultJSON, FILTER_LAYOUT_ID } from "../../../models/constants";
import { MovieFilters } from "../../../models/types/movie";
import { SessionKey } from "../../../models/enums/session";
import Session from "../../../utils/sessionStorage";
import useDiscoverMovies from "../../../api/hooks/useDiscoverMovies";
import { useNavigate } from "react-router-dom";
import path from "../../../router/routePath.json";

const FilterLayout = <TInput extends FieldValues>({
    children,
    methods,
    isLoading,
}: FilterLayoutProps<TInput>) => {
    const { handleSubmit } = methods;
    const { discoverMovies } = useDiscoverMovies();
    const navigate = useNavigate();

    const onSubmitFilter: SubmitHandler<TInput> = (data: TInput) => {
        const { year, genre, country } = data;
        const filters: MovieFilters = {
            year: year ? JSON.parse(year) : DateDefaultJSON,
            genre: genre ? JSON.parse(genre) : [],
            country: country ? JSON.parse(country) : "",
        };
        Session.set(SessionKey.FILTERS, filters);
        discoverMovies(filters);
        navigate(path.game);
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
                    <PlayBtn type="submit" title="Start" loading={isLoading} />
                </section>
            </form>
        </FormProvider>
    );
};

export default FilterLayout;
