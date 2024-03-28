import React from "react";
import useGameActions from "../../../hooks/gameplay/useGameActions";
import ErrorLayout from "../../layout/ErrorLayout";

const NotEnoughMovies: React.FC = () => {
    const { handleQuit } = useGameActions(() => {});

    const handleBackLink = () => {
        handleQuit();
    };

    return (
        <ErrorLayout
            description="There are not enough movies with this filter"
            buttonText="Change your filters"
            onClick={handleBackLink}
        />
    );
};

export default NotEnoughMovies;
