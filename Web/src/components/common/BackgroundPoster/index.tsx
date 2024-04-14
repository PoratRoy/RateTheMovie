import React from "react";
import style from "./BackgroundPoster.module.css";
import MoviePosterGif from "../../../assets/moviePosterGif3.gif";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import LazyMoviePoster from "../../../assets/LazyMoviesPoster.jpeg";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MOVIES_POSTER_ID } from "../../../models/constant/ids";

const BackgroundPoster: React.FC = () => {
    return (
        <React.Fragment>
            <section id={MOVIES_POSTER_ID} className={style.landingBackgroundImg}>
                <img
                    src={MoviePosterGif}
                    className={style.landingBackgroundImgImg}
                    alt="background poster of movies"
                />
                {/* <LazyLoadImage
                    effect="blur"
                    src={LazyMoviePoster}
                    className={style.landingBackgroundImgImgLazy}
                    alt="Lazy background poster of movies"
                /> */}
            </section>
        </React.Fragment>
    );
};

export default BackgroundPoster;
