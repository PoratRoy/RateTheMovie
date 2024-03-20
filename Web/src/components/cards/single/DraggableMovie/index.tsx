import React from "react";
import Draggable from "../../../dnd/Draggable";
import style from "./DraggableMovie.module.css";
import Movie from "../../core/Movie";
import { cardAnimation_all } from "../../../../models/initialization/card";
import { DraggableMovieProps } from "../../../../models/types/props/movie";

const DraggableMovie: React.FC<DraggableMovieProps> = ({
    id,
    movie,
    player,
    isShadow,
    size = "large",
}) => {
    return (
        <div className={style.draggableCard}>
            <Draggable draggableId={id} args={{ movie, player }}>
                <Movie movie={movie} isShadow={isShadow} size={size} actions={cardAnimation_all} />
            </Draggable>
        </div>
    );
};

export default DraggableMovie;
