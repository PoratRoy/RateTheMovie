import React from "react";
import { PlayBtnProps } from "../../../models/types/props";
import style from "./PlayBtn.module.css";

const PlayBtn: React.FC<PlayBtnProps> = ({ title, width = 300, height = 90, loading }) => {
    return (
        <div>
            {loading ? (
                <div className={style.btnLayoutLoading}>Loading...</div>
            ) : (
                <input
                    className={style.playBtn}
                    style={{ width, height }}
                    value={title}
                    type="submit"
                />
            )}
        </div>
    );
};

export default PlayBtn;
