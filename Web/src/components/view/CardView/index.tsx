import React from "react";
import { CardViewProps } from "../../../models/types/props";
import style from "./CardView.module.css";
import ViewImg from "../core/ViewImg";
import { getGenres } from "../../../utils/genre";
import CloseBtn from "../core/CloseBtn";

const CardView: React.FC<CardViewProps> = ({ movie, close }) => {
    const { title, poster_path, actors, director, genre_ids, release_date } = movie;
    return (
        <section className={style.cardViewModal}>
            <CloseBtn close={close} />
            <section className={style.cardViewImgContainer}>
                <ViewImg src={poster_path} alt={title} />
            </section>
            <section className={style.cardViewDataContainer}>
                <div className={style.cardViewTitle}>{title}</div>
                <div>{getGenres(genre_ids)}</div>
                <div>actors: {actors ? actors : "N/A"}</div>
                <div>director: {director ? director : "N/A"}</div>
                <div>release date: {release_date ? release_date : "N/A"}</div>
            </section>
        </section>
    );
};

export default CardView;
