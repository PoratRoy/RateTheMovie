import { useState } from "react";
import style from "./RoundsNumber.module.css";
import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";
import { FieldValues } from "react-hook-form";
import { RoundInputProps } from "../../../models/types/props";
import { FormSetValue } from "../../../models/constants";

const RoundsNumber = <TInput extends FieldValues>({ id, setValue }: RoundInputProps<TInput>) => {
    const [number, setNumber] = useState<number>(5);

    const handleIncrement = () => {
        setNumber((prev) => {
            let number = prev;
            if (number < 10) return number + 1;
            setValue(id, JSON.stringify(number), FormSetValue);
            return number;
        });
    };

    const handleDecrement = () => {
        setNumber((prev) => {
            let number = prev;
            if (number > 1) return number - 1;
            setValue(id, JSON.stringify(number), FormSetValue);
            return number;
        });
    };

    return (
        <section className={style.roundNum}>
            <div className={style.roundNumTitle}>Rounds number</div>
            <div className={style.roundNumAction}>
                <div onClick={handleDecrement} className={style.roundNumDecrement}>
                    <MdRemove />
                </div>
                <div className={style.roundNumNum}>{number}</div>
                <div onClick={handleIncrement} className={style.roundNumIncrement}>
                    <MdAdd />
                </div>
            </div>
        </section>
    );
};

export default RoundsNumber;
