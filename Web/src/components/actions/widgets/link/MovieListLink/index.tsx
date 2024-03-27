import React from "react";
import style from "./MovieListLink.module.css";
import { MovieListLinkProps } from "../../../../../models/types/props/link";
import { useGamePlayContext } from "../../../../../context/GamePlayContext";

const MovieListLink: React.FC<MovieListLinkProps> = () => {
    const { setIsPreview } = useGamePlayContext();

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
