import React, { useState, useEffect } from "react";
import style from "./BackgroundPoster.module.css";
import MoviePosterGif from "../../../assets/moviePosterGif3.gif";
// import LazyMoviePoster from "../../../assets/LazyMoviesPoster.jpeg";
import { MOVIES_POSTER_ID } from "../../../models/constant/ids";
import { Blurhash } from "react-blurhash";

const BackgroundPoster: React.FC = () => {
    const [imageLoading, setImageLoading] = useState<boolean>(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoading(true);
        };
        img.src = MoviePosterGif;
    }, []);
    return (
        <React.Fragment>
            <section id={MOVIES_POSTER_ID} className={style.landingBackgroundImg}>
                <div style={{ display: imageLoading ? "none" : "inline" }}>
                    <Blurhash
                        hash="L9Dl$m.5#6E05T}?xX$J+]MKl9${"
                        width={"100%"}
                        height={"100%"}
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    />
                </div>
                <div style={{ display: !imageLoading ? "none" : "inline" }}>
                    <img
                        src={MoviePosterGif}
                        className={style.landingBackgroundImgImg}
                        alt="background poster of movies"
                    />
                </div>
            </section>
        </React.Fragment>
    );
};

export default BackgroundPoster;
