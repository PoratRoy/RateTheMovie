import React from "react";
import Draggable from "../../../dnd/Draggable";
import style from "./DraggableMovie.module.css";
import Movie from "../../core/Movie";
import { DraggableMovieProps } from "../../../../models/types/props/movie";

const DraggableMovie: React.FC<DraggableMovieProps> = ({ id, movie, player, size = "large" }) => {
    return (
        <div className={style.draggableCard}>
            <Draggable draggableId={id} args={{ movie, player }}>
                <Movie movie={movie} size={size} actions={[]} />
            </Draggable>
        </div>
    );
};

export default DraggableMovie;
