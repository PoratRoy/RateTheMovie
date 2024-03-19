import React from "react";
import style from "./MovieListLink.module.css";
import { MovieListLinkProps } from "../../../../../models/types/props/link";
import { useNavigate } from "react-router-dom";
import path from "../../../../../router/routePath.json";

const MovieListLink: React.FC<MovieListLinkProps> = ({ close }) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        close();
        navigate(path.preview);
    };

    return (
        <div onClick={handleOnClick} className={style.movieListLink}>
            Go to Movie List
        </div>
    );
};

export default MovieListLink;
