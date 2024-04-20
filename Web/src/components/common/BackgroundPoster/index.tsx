import React from "react";
import style from "./BackgroundPoster.module.css";
import { MOVIES_POSTER_ID } from "../../../models/constant/ids";
import { Blurhash } from "react-blurhash";
import { IMG_HASH } from "../../../models/constant";
import useImgLoad from "../../../hooks/global/useImgLoad";
import { POSTER_IMG } from "../../../models/constant/img";

const BackgroundPoster: React.FC = () => {
    const { imageLoading } = useImgLoad(POSTER_IMG, []);

    return (
        <section id={MOVIES_POSTER_ID} className={style.landingBackground}>
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
            <div
                style={{
                    display: !imageLoading ? "flex" : "none",
                    flexDirection: !imageLoading ? "column" : "row",
                }}
                className={style.landingBackgroundImg}
            >
                <img
                    src={POSTER_IMG}
                    className={style.landingBackgroundImgImg}
                    alt="background poster of movies"
                />
                <img
                    src={POSTER_IMG}
                    className={style.landingBackgroundImgImg}
                    alt="background poster of movies"
                />
            </div>
        </section>
    );
};

export default BackgroundPoster;
