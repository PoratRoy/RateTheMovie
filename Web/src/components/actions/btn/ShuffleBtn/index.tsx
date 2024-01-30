import React from "react";
import { GiCardExchange } from "react-icons/gi";
import style from "./ShuffleBtn.module.css";
import useHandleShuffle from "../../../../hooks/useHandleShuffle";

const ShuffleBtn: React.FC = () => {
    const { handleShuffle } = useHandleShuffle();

    return (
        <div onClick={handleShuffle} className={style.shuffleBtn}>
            <div className={style.shuffleIcon}>
                <GiCardExchange />
            </div>
            <div className={style.shuffleText}>Shuffle</div>
        </div>
    );
};

export default ShuffleBtn;
