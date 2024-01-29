import React from "react";
import style from "./RateStar.module.css";
import { RateStarProps } from "../../../../models/types/props";
import { FaStar } from "react-icons/fa";

const RateStar: React.FC<RateStarProps> = ({ amount }) => {
    return (
        <div className={style.rateStars}>
            {[...Array(amount)].map((_, i: number) => (
                <span key={i} className={style.rateStar}>
                    <FaStar />
                </span>
            ))}
        </div>
    );
};

export default RateStar;
