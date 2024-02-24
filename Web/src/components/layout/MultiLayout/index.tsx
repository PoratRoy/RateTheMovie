import style from "./MultiLayout.module.css";
import { FieldValues, FormProvider, SubmitHandler } from "react-hook-form";
import { MULTI_LAYOUT_ID, MULTI_START_BTN_ID } from "../../../models/constants";
import { useState } from "react";
import PlayBtn from "../../actions/btn/PlayBtn";
import { useSocketContext } from "../../../context/SocketContext";

const MultiLayout = () => {
    const { handleUpdatePlayerName } = useSocketContext();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // const { handleSubmit } = methods;

    // const onSubmitMutliForm: SubmitHandler<TInput> = (data: TInput) => {
    //     setIsLoading(true);
    //     const { name } = data;
    //     handleUpdatePlayerName(name);
    //     setLayoutOption && setLayoutOption(LandingOpt.MULTI_FILTER);
    //     setIsLoading(false);
    // };

    // const className = playerRole === "host" ? style.multiFormHost : style.multiFormPlayer;//TODO: refactor this

    return (
        <div></div>
        // <FormProvider {...methods}>
        //     <form
        //         id={MULTI_LAYOUT_ID}
        //         className={className}
        //         onSubmit={handleSubmit(onSubmitMutliForm)}
        //         noValidate
        //     >
        //         <section className={style.multiFormChildrens}>{children}</section>

        //         <section className={style.multiFormbtn}>
        //             <PlayBtn
        //                 id={MULTI_START_BTN_ID}
        //                 type="submit"
        //                 title="Start"
        //                 loading={isLoading}
        //             />
        //         </section>
        //     </form>
        // </FormProvider>
    );
};

export default MultiLayout;
