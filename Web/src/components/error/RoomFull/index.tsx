import React from "react";
import { useNavigate } from "react-router-dom";
import path from "../../../router/routePath.json";
import ErrorLayout from "../../layout/ErrorLayout";

const RoomFull: React.FC = () => {
    const navigate = useNavigate();

    const handleBackLink = () => {
        navigate(path.land);
    };

    return (
        <ErrorLayout
            description="Room is already full"
            buttonText="Start a new game"
            onClick={handleBackLink}
        />
    );
};

export default RoomFull;
