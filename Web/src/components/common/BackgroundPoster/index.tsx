import React from "react";
import style from "./BackgroundPoster.module.css";
import { MOVIES_POSTER_ID } from "../../../models/constant";
import MoviePosterGif from "../../../assets/moviePosterGif.gif";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LazyMoviePoster from "../../../assets/LazyMoviesPoster.jpeg";

const BackgroundPoster: React.FC = () => {
    return (
        <React.Fragment>
            <section id={MOVIES_POSTER_ID} className={style.landingBackgroundImg}>
                <img
                    src={MoviePosterGif}
                    className={style.landingBackgroundImgImg}
                    alt="background poster of movies"
                />
                <LazyLoadImage
                    effect="blur"
                    src={LazyMoviePoster}
                    className={style.landingBackgroundImgImgLazy}
                    alt="Lazy background poster of movies"
                />
            </section>
        </React.Fragment>
    );
};

export default BackgroundPoster;
