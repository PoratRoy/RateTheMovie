import React from "react";
import style from "./MovieListLink.module.css";
import { MovieListLinkProps } from "../../../../../models/types/props/link";
import { useGameStatusContext } from "../../../../../context/GameStatusContext";

const MovieListLink: React.FC<MovieListLinkProps> = () => {
    const { setIsPreview } = useGameStatusContext();

    const handleOnClick = () => {
        setIsPreview(prev => !prev);
    };

    return (
        <div onClick={handleOnClick} className={style.movieListLink}>
            Go to Movie List
        </div>
    );
};

export default MovieListLink;
