import React from "react";
import { CardViewProps } from "../../../models/types/props";
import style from "./CardView.module.css";
import ViewImg from "../core/ViewImg";
import { getGenres } from "../../../utils/genre";
import CardViewLayout from "../../layout/CardViewLayout";
import Genre from "../core/Genre";

const CardView: React.FC<CardViewProps> = ({ movie, close }) => {
    const { title, poster_path, actors, director, genre_ids, release_date, description } = movie;
    return (
        <CardViewLayout close={close}>
            <section className={style.cardViewImgContainer}>
                <ViewImg src={poster_path} alt={title} />
            </section>
            <section className={style.cardViewDataContainer}>
                <h2 className={style.cardViewTitle}>{title}</h2>
                <div className={style.cardViewGenres}>
                    {getGenres(genre_ids).map((genre: string, i: number) => (
                        <React.Fragment key={i}>
                            <Genre genre={genre} />
                        </React.Fragment>
                    ))}
                </div>
                <section className={style.cardViewInfo}>
                    <div>actors: {actors ? actors : "N/A"}</div>
                    <div>director: {director ? director : "N/A"}</div>
                    <div>release date: {release_date ? release_date : "N/A"}</div>
                    <div>{description ? description : "N/A"}</div>
                </section>
            </section>
        </CardViewLayout>
    );
};

export default CardView;
