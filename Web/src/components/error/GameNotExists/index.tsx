import React from "react";
import { useNavigate } from "react-router-dom";
import path from "../../../router/routePath.json";
import ErrorLayout from "../../layout/ErrorLayout";

const GameNotExists: React.FC = () => {
    const navigate = useNavigate();

    const handleBackLink = () => {
        navigate(path.land);
    };

    return (
        <ErrorLayout
            description="Ops.. Looks like the game not found"
            buttonText="Create a new game"
            onClick={handleBackLink}
        />
    );
};

export default GameNotExists;
