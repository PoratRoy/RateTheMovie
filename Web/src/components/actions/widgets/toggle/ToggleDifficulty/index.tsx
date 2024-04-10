import { useState } from "react";
import style from "./ToggleDifficulty.module.css";
import { Difficulty } from "../../../../../models/types/union";
import { SelectRadio } from "../../../../../models/types/select";
import { TEXT_COLOR, TEXT_COLOR_OPACITY_REAL } from "../../../../../style/root";
import { ToggleDifficultyProps } from "../../../../../models/types/props/input";
import { FieldValues } from "react-hook-form";
import { FormSetValue } from "../../../../../models/constant";

const ToggleDifficulty = <TInput extends FieldValues>({
    id,
    setValue,
}: ToggleDifficultyProps<TInput>) => {
    const [difficulty, setDifficulty] = useState<Difficulty>("easy");
    const [ofset, setOfset] = useState<number>(0);

    const onToggle = (ev: any) => {
        const difficulty: Difficulty = ev && ev.target.id;
        setDifficulty(difficulty);
        setValue(id, difficulty, FormSetValue);
        //TODO: Fix this
        setOfset(difficulty === "easy" ? 0 : difficulty === "medium" ? 1 : 2);
    };

    const options: SelectRadio[] = [
        { value: "easy", label: "Easy" },
        { value: "medium", label: "Medium" },
        { value: "hard", label: "Hard" },
    ];

    const eachSwitchWidth = 80;
    const noOfSwitches = options.length || 2;
    const switchWidth = noOfSwitches * eachSwitchWidth;
    const labelWidth = `${eachSwitchWidth || switchWidth / noOfSwitches}px`;

    const switches = options.map((option: SelectRadio) => {
        const { value, label } = option;
        const labelStyles = {
            width: labelWidth,
            color: difficulty === value ? TEXT_COLOR : TEXT_COLOR_OPACITY_REAL,
        };

        return (
            <label
                key={value}
                id={value}
                className={style.multiSwitchContent}
                style={labelStyles}
                onClick={onToggle}
            >
                {label}
            </label>
        );
    });

    return (
        <div className={style.multiSwitchContainer} style={{ width: `${switchWidth}px` }}>
            {switches}
            <span
                className={style.multiSwitchHandle}
                style={{
                    width: labelWidth,
                    left: `${ofset * eachSwitchWidth + 2}px`,
                }}
            >
                {}
            </span>
        </div>
    );
};

export default ToggleDifficulty;
