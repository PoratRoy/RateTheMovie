import React, { useState } from "react";
import style from "./Avaters.module.css";
import { AvatersProps } from "../../../models/types/props";
import { FieldValues } from "react-hook-form";
import { FormSetValue } from "../../../models/constants";
import ProfileAvater from "../../landing/profile/common/ProfileAvater";
import { AvaterImgs } from "../../../models/avaters";

const Avaters = <TInput extends FieldValues>({ id, setValue, defualt }: AvatersProps<TInput>) => {
    const [avater, setAvater] = useState<number>(defualt);

    const handleAvater = (avaterId: number) => {
        setAvater(avaterId);
        setValue(id, JSON.stringify(avaterId), FormSetValue);
    };

    return (
        <section className={style.avatersContainer}>
            {AvaterImgs.map((img: string, i: number) => (
                <span key={i} onClick={() => handleAvater(i)}>
                    <ProfileAvater img={img} isFocus={avater === i ? true : false} />
                </span>
            ))}
        </section>
    );
};

export default Avaters;
