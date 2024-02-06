import React from "react";
import { CardViewProps } from "../../../models/types/props";
import style from "./CardView.module.css";
import ViewImg from "../core/ViewImg";
import { getGenres } from "../../../utils/genre";
import CardViewLayout from "../../layout/CardViewLayout";
import Genre from "../core/Genre";
import Crew from "../crew/Crew";
import { formatDate } from "../../../utils/format";

const CardView: React.FC<CardViewProps> = ({ movie, close }) => {
    const { title, poster_path, actors, director, genre_ids, release_date, description, video } =
        movie;
    return (
        <CardViewLayout close={close}>
            <ViewImg src={poster_path} alt={title} video={video} />
            <section className={style.cardViewDataContainer}>
                <h2 className={style.cardViewTitle}>{title}</h2>
                {release_date ? (
                    <span className={style.cardDate}>{formatDate(release_date)}</span>
                ) : null}
                <section className={style.cardViewInfo}>
                    <div className={style.cardViewGenres}>
                        {getGenres(genre_ids).map((genre: string, i: number) => (
                            <React.Fragment key={i}>
                                <Genre genre={genre} />
                            </React.Fragment>
                        ))}
                    </div>
                    <Crew actors={actors} director={director} />
                    {description ? <div>{description}</div> : null}
                </section>
            </section>
        </CardViewLayout>
    );
};

export default CardView;
