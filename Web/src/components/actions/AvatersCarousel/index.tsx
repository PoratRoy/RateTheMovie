import { useState } from "react";
import style from "./AvatersCarousel.module.css";
import { AvatersCarouselProps } from "../../../models/types/props";
import { FieldValues } from "react-hook-form";
import { FormSetValue } from "../../../models/constants";
import Avater from "../../profile/Avater";
import { AvaterImgs } from "../../../models/avaters";

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
