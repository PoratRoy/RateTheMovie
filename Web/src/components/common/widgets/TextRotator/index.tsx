import React, { useEffect } from "react";
import { PACK_CARDS_NUM } from "../../../../models/constant";
import style from "./TextRotator.module.css";

const TextRotator: React.FC = () => {
    const Sentences = [
        "Ready to test your movie knowledge?",
        `Drag ${PACK_CARDS_NUM} films to their correct rating order (lowest to highest)`,
        "and rack up points!",
    ];

    const [selected, setSelected] = React.useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          const nextValue = (selected + 1) % 3;
          setSelected(nextValue);
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, [selected]);
    //TODO: animation
    return <section className={style.textRotator} >{Sentences[selected]}</section>;
};

export default TextRotator;
