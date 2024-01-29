import React from "react";
import { GenreProps } from "../../../../models/types/props";
import style from "./Genre.module.css";

const Genre: React.FC<GenreProps> = ({ genre }) => {
    return <span className={style.viewGenre}>{genre}</span>;
};

export default Genre;
