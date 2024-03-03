import React from "react";
import Img from "../../core/Img";
import Draggable from "../../../dnd/Draggable";
import style from "./DraggableMovie.module.css";
import CardImgShadow from "../../shadow/CardImgShadow";
import { DraggableMovieProps } from "../../../../models/types/props/card";

const DraggableMovie: React.FC<DraggableMovieProps> = ({
    id,
    movie,
    player,
    isShadow,
    size = "large",
}) => {
    const { title, poster_path } = movie;
    return (
        <div className={style.draggableCard}>
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
