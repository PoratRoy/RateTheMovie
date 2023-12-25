import React from "react";
import style from "./PlaceholderIcon.module.css";
import { BiSolidCameraMovie } from "react-icons/bi";

const PlaceholderIcon: React.FC = () => {
    return (
        <div className={style.cardMovieIcon}>
            <BiSolidCameraMovie />
        </div>
    );
};

export default PlaceholderIcon;
