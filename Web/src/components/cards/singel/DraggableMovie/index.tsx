import React, { useEffect } from "react";
import Img from "../../core/Img";
import Draggable from "../../../dnd/Draggable";
import { DraggableMovieProps } from "../../../../models/types/props";
import style from "./DraggableMovie.module.css";
import useCardEvent from "../../../../hooks/useCardEvents";

const DraggableMovie: React.FC<DraggableMovieProps> = ({ movie, player, isHover, setOpen }) => {
    const {
        isHovered,
        isDoubleClick,
        handleMouseEnter,
        handleMouseLeave,
        handleMouseDown,
        handleMouseUp,
    } = useCardEvent();
    const { id, title, poster_path } = movie;
    const draggableId = `${id}-${player.id}`;

    useEffect(() => {
        if (isDoubleClick) {
            setOpen && setOpen(true);
        }
    }, [isDoubleClick, setOpen]);

    return (
        <Draggable draggableId={draggableId} movie={movie} player={player}>
            <section
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                className={style.draggableMovie}
            >
                {isHover && isHovered && <div className={style.cardTitle}>{title}</div>}
                <div className={style.cardLoading}></div>
                <div className={style.cardImgs}>
                    <Img alt={title} src={poster_path} />
                </div>
            </section>
        </Draggable>
    );
};

export default DraggableMovie;
