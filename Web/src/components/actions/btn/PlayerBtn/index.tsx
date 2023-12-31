import React from "react";
import { PlayerBtnProps } from "../../../../models/types/props";
import style from "./PlayerBtn.module.css";

const PlayerBtn: React.FC<PlayerBtnProps> = ({ title, onClicked, onFocused }) => {
    return (
        <div
            onClick={onClicked}
            className={`${style.playerBtn} ${onFocused && style.playerBtnGlow}`}
        >
            {title}
        </div>
    );
};

export default PlayerBtn;
