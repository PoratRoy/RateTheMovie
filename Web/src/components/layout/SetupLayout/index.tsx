import style from "./SetupLayout.module.css";
import { FieldValues, FormProvider, SubmitHandler } from "react-hook-form";
import { SetupLayoutProps } from "../../../models/types/props";
import { SETUP_ID } from "../../../models/constants";

const SetupLayout = <TInput extends FieldValues>({
    playerRole,
    children,
    methods,
}: SetupLayoutProps<TInput>) => {
    const { handleSubmit } = methods;

    // const { handleGameFilters } = useSocketContext();
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    // const navigate = useNavigate();
    // const { firstRoundMovies } = useFirstRoundMovies();

    const onSubmitForm: SubmitHandler<TInput> = (data: TInput) => {
        console.log("data", data);
        // setIsLoading(true);
        // const { year, genre, language } = data;
        // const filters: MovieFilters = {
        //     year: year ? JSON.parse(year) : DateDefaultJSON,
        //     genre: genre ? JSON.parse(genre) : [],
        //     language: language ? JSON.parse(language) : "",
        // };
        // const room = Session.get(SessionKey.ROOM);
        // if(room !== SingelPlayerRoom){
        //     handleGameFilters(filters);
        // }
        // Session.set(SessionKey.FILTERS, filters);
        // firstRoundMovies(filters);
        // setTimeout(() => {
        //     setIsLoading(false);
        //     navigate(path.game);
        // }, 2000);
    };

    return (
        <FormProvider {...methods}>
            <form
                id={SETUP_ID}
                className={style.setupContainer}
                onSubmit={handleSubmit(onSubmitForm)}
                // TODO: refactor it
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
