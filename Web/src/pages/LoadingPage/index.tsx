import React from "react";
import { LoadingPageProps } from "../../models/types/props/landing";
import useMod from "../../hooks/gameplay/useMod";
import MultiLoading from "./MultiLoading";
import SingleLoading from "./SingleLoading";
//https://unused-css.com/blog/animated-down-arrow/

const LoadingPage: React.FC<LoadingPageProps> = (props) => {
    const { game, isLoading, onClicked } = props;
    const { isMulti } = useMod();

    return isMulti(game?.mod) ? (
        <MultiLoading {...props} />
    ) : (
        <SingleLoading isLoading={isLoading} onClicked={onClicked} />
    );
};

export default LoadingPage;
