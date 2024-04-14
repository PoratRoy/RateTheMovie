import React, { useState, useEffect } from "react";
import style from "./BackgroundPoster.module.css";
import MoviePosterGif from "../../../assets/moviePosterGif3.gif";
import { MOVIES_POSTER_ID } from "../../../models/constant/ids";
import { Blurhash } from "react-blurhash";
import { IMG_HASH } from "../../../models/constant";

const BackgroundPoster: React.FC = () => {
    const [imageLoading, setImageLoading] = useState<boolean>(true);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoading(false);
        };
        img.src = MoviePosterGif;
        return () => {
            img.onload = null;
        };
    }, []);

    return (
        <React.Fragment>
            <section id={MOVIES_POSTER_ID} className={style.landingBackgroundImg}>
                <div style={{ display: imageLoading ? "inline" : "none"  }}>
                    <Blurhash
                        hash={IMG_HASH}
                        width={"100%"}
                        height={"100%"}
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    />
                </div>
                <div style={{ display: !imageLoading ? "inline" : "none" }}>
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
