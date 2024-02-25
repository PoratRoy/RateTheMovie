import { useState } from "react";
import style from "./AvatersCarousel.module.css";
import { FieldValues } from "react-hook-form";
import Avater from "../../profile/Avater";
import { AvaterImgs } from "../../../models/resources/avaters";
import { FormSetValue } from "../../../models/constant";
import { AvatersCarouselProps } from "../../../models/types/props/input";

//TODO: need to build the infinte carousel
const AvatersCarousel = <TInput extends FieldValues>({
    id,
    setValue,
    defualt,
}: AvatersCarouselProps<TInput>) => {
    const [avater, setAvater] = useState<number>(defualt);

    const handleAvater = (avaterId: number) => {
        setAvater(avaterId);
        setValue(id, JSON.stringify(avaterId), FormSetValue);
    };

    return (
        <section className={style.avatersContainer}>
            {AvaterImgs.map((img: string, i: number) => (
                <span key={i} onClick={() => handleAvater(i)}>
                    <Avater img={img} isFocus={avater === i ? true : false} />
                </span>
            ))}
        </section>
    );
};

export default AvatersCarousel;
