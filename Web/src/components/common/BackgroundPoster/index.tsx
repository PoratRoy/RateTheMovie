import React from "react";
import style from "./BackgroundPoster.module.css";
import MoviePosterGif from "../../../assets/moviePosterGif3.gif";
import { MOVIES_POSTER_ID } from "../../../models/constant/ids";
import { Blurhash } from "react-blurhash";
import { IMG_HASH } from "../../../models/constant";
import useImgLoad from "../../../hooks/global/useImgLoad";
import ForLazy from "../../../assets/forlazy.jpg";

const BackgroundPoster: React.FC = () => {
    const { imageLoading } = useImgLoad(MoviePosterGif, []);

    return (
        <section id={MOVIES_POSTER_ID} className={style.landingBackgroundImg}>
            <div style={{ display: imageLoading ? "inline" : "none" }}>
                <Blurhash
                    hash={IMG_HASH}
                    width={"100%"}
                    height={"100%"}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            </div>
            <div style={{ position: "relative", display: !imageLoading ? "inline" : "none" }}>
                <img
                    style={{ width: "100%", height: 400, position: "absolute", top: 0, left: 0}}
                    src={ForLazy}
                    alt="lazy poster iamge"
                />
                <img
                    src={MoviePosterGif}
                    className={style.landingBackgroundImgImg}
                    alt="background poster of movies"
                />
            </div>
        </section>
    );
};

export default BackgroundPoster;
