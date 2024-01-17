import React from "react";
import { CardViewProps } from "../../../models/types/props";
import style from "./CardView.module.css";
import ViewImg from "../core/ViewImg";
import { getGenres } from "../../../utils/genre";

const CardView: React.FC<CardViewProps> = ({ movie, close }) => {
    const { title, poster_path, actors, director, genre_ids, release_date } = movie;
    return (
        <section className={style.cardViewModal}>
            <div onClick={close} className={style.cardViewModalExist}>
                X
            </div>
            <section className={style.cardViewImgContainer}>
                <ViewImg src={poster_path} alt={title} />
            </section>
            <section className={style.cardViewDataContainer}>
                <div className={style.cardViewTitle}>{title}</div>
                <div>{getGenres(genre_ids)}</div>
                <div>actors: {actors ? actors : "roy"}</div>
                <div>director: {director ? director : "roy"}</div>
                <div>release_date: {release_date ? release_date : "roy"}</div>
            </section>
        </section>
    );
};

export default CardView;
