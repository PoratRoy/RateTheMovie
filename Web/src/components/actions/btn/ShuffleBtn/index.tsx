import React from "react";
import { GiCardExchange } from "react-icons/gi";
import style from "./ShuffleBtn.module.css";

const ShuffleBtn: React.FC = () => {
    return (
        <div className={style.shuffleBtn}>
            <GiCardExchange />
        </div>
    );
};

export default ShuffleBtn;
