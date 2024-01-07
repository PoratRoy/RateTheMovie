import React, { useEffect } from "react";
import Img from "../../core/Img";
import Draggable from "../../../dnd/Draggable";
import { DraggableMovieProps } from "../../../../models/types/props";
import style from "./DraggableMovie.module.css";
import useCardEvent from "../../../../hooks/useCardEvents";

const DraggableMovie: React.FC<DraggableMovieProps> = ({
    id,
    movie,
    player,
    isHover,
    isClickable,
    side,
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
        if (isClickable && isDoubleClick) {
            setOpen && setOpen(true);
        }
    }, [isDoubleClick, setOpen]);

    const className =
        side === "all"
            ? style.cardSideAll
            : side === "left"
              ? style.cardSideLeft
              : style.cardSideRight;

    return (
        <div className={className}>
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
