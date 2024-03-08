import React, { useEffect, useState } from "react";
import style from "./Place.module.css";
import { PlaceProps } from "../../../models/types/props/profile";

const Place: React.FC<PlaceProps> = ({ children, place }) => {
    const [color, setColor] = useState<string>("transparent");
    const [title, setTitle] = useState<string>("");
    const isTopThree = place <= 3 ? true : false;

    const className = isTopThree ? style.placeTopThree : style.placeNormal; //TODOCSS: refactor this

    useEffect(() => {
        if (place === 1) {
            setColor("gold");
            setTitle("Round Winner");
        } else if (place === 2) {
            setColor("silver");
            setTitle("Second Place");
        } else if (place === 3) {
            setColor("brown");
            setTitle("Third Place");
        }
    }, []);

    return (
        <section style={{ border: `3px solid ${color}` }} className={style.placeContainer}>
            {isTopThree ? (
                <div style={{ color }} className={className}>
                    {title}
                </div>
            ) : null}
            {children}
        </section>
    );
};

export default Place;
