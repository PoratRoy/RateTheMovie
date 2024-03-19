import React from "react";
import { PACK_CARDS_NUM } from "../../../../models/constant";
import style from "./TextRotator.module.css";

const TextRotator: React.FC = () => {
    const Sentences = [
        "Ready to test your movie knowledge?",
        `Drag ${PACK_CARDS_NUM} films to their correct rating order (lowest to highest)`,
        "and rack up points!",
    ];

    return (
        <section className={style.textRotator}>
            <div className={style.textLineI}>{Sentences[0]}</div>
            <div className={style.textLineII}>{Sentences[1]}</div>
            <div className={style.textLineIII}>{Sentences[2]}</div>
        </section>
    );
};

export default TextRotator;
