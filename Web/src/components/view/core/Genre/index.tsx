import React from "react";
import style from "./Genre.module.css";
import { GenreProps } from "../../../../models/types/props/view";

const Genre: React.FC<GenreProps> = ({ genre }) => {
    return <span className={style.viewGenre}>{genre}</span>;
};

export default Genre;
