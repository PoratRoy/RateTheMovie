import React from "react";
import style from "./RateStar.module.css";
import { RateStarProps } from "../../../../models/types/props";
import { FaStar } from "react-icons/fa";

const RateStar: React.FC<RateStarProps> = ({ amount, size = "small" }) => {
    const sizeClass = size === "small" ? style.rateStarSmall : style.rateStarLarge; //TODOCSS: refactor this

    return (
        <div className={style.rateStars}>
            {[...Array(amount)].map((_, i: number) => (
                <span key={i} className={sizeClass}>
                    <FaStar />
                </span>
            ))}
        </div>
    );
};

export default RateStar;
