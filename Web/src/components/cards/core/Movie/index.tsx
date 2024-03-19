import React from "react";
import CardImgShadow from "../../shadow/CardImgShadow";
import Img from "../Img";
import { MovieProps } from "../../../../models/types/props/movie";
import { cardAnimation_title } from "../../../../models/initialization/card";

const Movie: React.FC<MovieProps> = ({
    movie,
    isShadow,
    size,
    actions = cardAnimation_title,
}) => {
    const { title, poster_path } = movie;
    return (
        <section>
            {isShadow ? <CardImgShadow title={title} actions={actions} /> : null}
            <Img alt={title} src={poster_path} size={size} />
        </section>
    );
};

export default Movie;
