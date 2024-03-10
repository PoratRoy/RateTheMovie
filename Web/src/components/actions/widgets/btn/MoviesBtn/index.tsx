import React from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import { MoviesBtnProps } from "../../../../../models/types/props/btn";
import CircleBtn from "../../../core/button/CircleBtn";
import { useNavigate } from "react-router-dom";
import path from "../../../../../router/routePath.json";

const MoviesBtn: React.FC<MoviesBtnProps> = ({ close }) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        close();
        navigate(path.preview);
    };

    return <CircleBtn onClicked={handleOnClick} Icon={<BiSolidCameraMovie />} />;
};

export default MoviesBtn;
