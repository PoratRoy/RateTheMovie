import React from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import { MoviesBtnProps } from "../../../../../models/types/props/btn";
import CircleBtn from "../../../core/button/CircleBtn";

const MoviesBtn: React.FC<MoviesBtnProps> = ({ onClicked }) => {
    return <CircleBtn onClicked={onClicked} Icon={<BiSolidCameraMovie />} />;
};

export default MoviesBtn;
