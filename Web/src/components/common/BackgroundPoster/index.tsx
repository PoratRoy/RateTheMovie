import React from "react";
import style from "./BackgroundPoster.module.css";
import { MOVIES_POSTER_ID } from "../../../models/constants";
import backgroundMoviesImg from "../../../assets/allMoviesPoster2.jpeg";
//https://www.reduceimages.com/

const BackgroundPoster: React.FC = () => {
    return (
        <React.Fragment>
            <section id={MOVIES_POSTER_ID} className={style.landingBackgroundImg}>
                <img src={backgroundMoviesImg} alt="Background poster of movies" />
            </section>
            <section id={MOVIES_POSTER_ID} className={style.landingBackgroundImg}>
                <img src={backgroundMoviesImg} alt="Background poster of movies" />
            </section>
        </React.Fragment>
    );
};

export default BackgroundPoster;
