import React from "react";
import style from "./Placeholder.module.css";
import { setPlaceholderText } from "../../../../utils/card";
import Img from "../Img";
import RateStar from "../RateStar";
import { PlaceholderProps } from "../../../../models/types/props/card";

const Placeholder: React.FC<PlaceholderProps> = ({ type }) => {
    if (type.t === "Player") {
        const {
            card: {
                movie: { title, poster_path },
            },
        } = type;
        return (
            <div style={{ transform: "rotateY(180deg)" }}>
                <Img isShadow alt={title} src={poster_path} />
            </div>
        );
    } else if (type.t === "Elected") {
        const { index } = type;
        const text = setPlaceholderText(index || 0);
        return (
            <div className={style.cardPlaceholder}>
                <div className={style.cardPlaceholderText}>{text}</div>
                <RateStar amount={index + 1} />
            </div>
        );
    } else {
        return <div className={style.cardPlaceholder} />;
    }
};

export default Placeholder;
