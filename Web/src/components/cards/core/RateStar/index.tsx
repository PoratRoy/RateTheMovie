import React from "react";
import style from "./RateStar.module.css";
import { FaStar } from "react-icons/fa";
import { RateStarProps } from "../../../../models/types/props/card";
import { styleSize } from "../../../../style/style";

const RateStar: React.FC<RateStarProps> = ({ amount, size = "small" }) => {
    const className = styleSize(style)[size];
    return (
        <div className={style.rateStars}>
            {[...Array(amount)].map((_, i: number) => (
                <span key={i} className={className}>
                    <FaStar />
                </span>
            ))}
        </div>
    );
};

export default RateStar;
