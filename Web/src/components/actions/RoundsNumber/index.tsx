import { useState } from "react";
import style from "./RoundsNumber.module.css";
import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";
import { FieldValues } from "react-hook-form";
import { FormSetValue, ROUND_NUM } from "../../../models/constant";
import { RoundInputProps } from "../../../models/types/props/input";

const RoundsNumber = <TInput extends FieldValues>({ id, setValue }: RoundInputProps<TInput>) => {
    const [number, setNumber] = useState<number>(ROUND_NUM);

    const handleIncrement = () => {
        setNumber((number) => {
            if (number < 10) {
                setValue(id, JSON.stringify(number + 1), FormSetValue);
                return number + 1;
            }
            return number;
        });
    };

    const handleDecrement = () => {
        setNumber((number) => {
            if (number > 1) {
                setValue(id, JSON.stringify(number - 1), FormSetValue);
                return number - 1;
            }
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
