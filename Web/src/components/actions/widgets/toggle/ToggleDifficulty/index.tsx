import { useEffect, useState } from "react";
import style from "./ToggleDifficulty.module.css";
import { Difficulty } from "../../../../../models/types/union";
import { SelectRadio } from "../../../../../models/types/select";
import {
    SECONDARY_COLOR,
    SECONDARY_COLOR_FOCUS,
    TEXT_COLOR,
    TEXT_COLOR_OPACITY_REAL,
} from "../../../../../style/root";
import { ToggleDifficultyProps } from "../../../../../models/types/props/input";
import { FieldValues } from "react-hook-form";
import { FormSetValue } from "../../../../../models/constant";

const ToggleDifficulty = <TInput extends FieldValues>({
    id,
    setValue,
}: ToggleDifficultyProps<TInput>) => {
    const [difficulty, setDifficulty] = useState<Difficulty>("easy");

    useEffect(() => {
        setValue(id, difficulty, FormSetValue);
    }, [difficulty]);

    const options: SelectRadio[] = [
        { value: "easy", label: "Easy" },
        { value: "medium", label: "Medium" },
        { value: "hard", label: "Hard" },
    ];

    return (
        <div className={style.radioDifficulty}>
            {options.map((option: SelectRadio, i: number) => (
                <label
                    key={i}
                    className={style.radioDifficultyLabel}
                    htmlFor={`${option.value}${i}`}
                    style={{
                        color: difficulty === option.value ? TEXT_COLOR : TEXT_COLOR_OPACITY_REAL,
                        backgroundColor:
                            difficulty === option.value ? SECONDARY_COLOR : SECONDARY_COLOR_FOCUS,
                        borderRadius: difficulty === option.value ? 50 : "none",
                    }}
                >
                    <input
                        id={`${option.value}${i}`}
                        type="radio"
                        name="map-switch"
                        value={option.value}
                        checked={difficulty === option.value}
                        onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                        className={style.radioDifficultyInput}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
};

export default ToggleDifficulty;
