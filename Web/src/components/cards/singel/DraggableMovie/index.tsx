import React from "react";
import Img from "../../core/Img";
import Draggable from "../../../dnd/Draggable";
import { DraggableMovieProps } from "../../../../models/types/props";
import style from "./DraggableMovie.module.css";
import CardImgShadow from "../../core/CardImgShadow";

const DraggableMovie: React.FC<DraggableMovieProps> = ({
    id,
    movie,
    player,
    isShadow,
    side = "all",
    size = "large",
}) => {
    const { title, poster_path } = movie;

    const className = //TODO: refactor this
        side === "all"
            ? style.cardSideAll
            : side === "left"
              ? style.cardSideLeft
              : style.cardSideRight;

    return (
        <div className={className}>
            <Draggable draggableId={id} props={{ movie, player }}>
                <section className={style.draggableMovie}>
                    {isShadow ? <CardImgShadow title={title} /> : null}
                    <Img alt={title} src={poster_path} size={size} />
                </section>
            </Draggable>
        </div>
    );
};

export default DraggableMovie;
