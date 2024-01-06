import React, { useEffect } from "react";
import Img from "../../core/Img";
import Draggable from "../../../dnd/Draggable";
import { DraggableMovieProps2 } from "../../../../models/types/props";
import style from "./DraggableMovie.module.css";
import useCardEvent from "../../../../hooks/useCardEvents";

const DraggableMovie: React.FC<DraggableMovieProps2> = ({
    id,
    movie,
    player,
    isHover,
    isClickbel,
    setOpen,
}) => {
    const {
        isHovered,
        isDoubleClick,
        handleMouseEnter,
        handleMouseLeave,
        handleMouseDown,
        handleMouseUp,
    } = useCardEvent();
    const { title, poster_path } = movie;

    useEffect(() => {
        if (isClickbel && isDoubleClick) {
            setOpen && setOpen(true);
        }
    }, [isDoubleClick, setOpen]);

    return (
        <div className={style.cardSide}>
            <Draggable draggableId={id} movie={movie} player={player}>
                <section
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    className={style.draggableMovie}
                >
                    {isHover && isHovered && <div className={style.cardTitle}>{title}</div>}
                    <Img alt={title} src={poster_path} />
                </section>
            </Draggable>
        </div>
    );
};

export default DraggableMovie;
