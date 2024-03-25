import React from "react";
import style from "./MovieModal.module.css";
import ViewImg from "../../core/ViewImg";
import { getGenres } from "../../../../utils/genre";
import CardViewLayout from "../../../layout/CardViewLayout";
import Genre from "../../core/Genre";
import Crew from "../../crew/Crew";
import { MovieModalProps } from "../../../../models/types/props/view";
import Rate from "../../../common/Rate";

const MovieModal: React.FC<MovieModalProps> = ({ movie, close }) => {
    const {
        title,
        poster_path,
        actors,
        director,
        genre_ids,
        release_date,
        description,
        video,
        imdbRating,
    } = movie;
    return (
        <CardViewLayout close={close}>
            <section className={style.movieModalContainer}>
                <ViewImg src={poster_path} alt={title} video={video} />
                <section>
                    <h2 className={style.movieModalTitle}>{title}</h2>
                    <div className={style.movieModalDateRate}>
                        {release_date ? release_date : null}
                        <Rate rate={imdbRating} position="relative" />
                    </div>
                </section>
                <section className={style.movieModalInfo}>
                    <div className={style.movieModalGenres}>
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

export default MovieModal;
