import React from "react";
import { PositionProps } from "../../../../models/types/props";
import style from "./Position.module.css";

const Position: React.FC<PositionProps> = ({ position }) => {
    return <div className={style.cardPosition}>{position}</div>;
};

export default Position;
