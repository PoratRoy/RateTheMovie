import React from "react";
import useGameActions from "../../../hooks/gameplay/useGameActions";
import ErrorLayout from "../../layout/ErrorLayout";

const SomethingWentWrong: React.FC = () => {
    const { handleQuit } = useGameActions(() => {});

    const handleBackLink = () => {
        handleQuit();
    };

    return (
        <ErrorLayout
            description="There is an issue starting the game"
            buttonText="Exit the game"
            onClick={handleBackLink}
        />
    );
};

export default SomethingWentWrong;
