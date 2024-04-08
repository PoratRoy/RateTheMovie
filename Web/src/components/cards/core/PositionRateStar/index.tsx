import React from "react";
import style from "./PositionRateStar.module.css";
import { FaStar } from "react-icons/fa";
import { PositionRateStarProps } from "../../../../models/types/props/card";
import { styleSize } from "../../../../style/style";

const PositionRateStar: React.FC<PositionRateStarProps> = ({ amount, size = "small" }) => {
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

export default PositionRateStar;
