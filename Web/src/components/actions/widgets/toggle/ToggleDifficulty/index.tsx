import React, { useEffect, useState } from "react";
import style from "./ToggleDifficulty.module.css";
import { ToggleDifficultyProps } from "../../../../../models/types/props/action";
import { Difficulty } from "../../../../../models/types/union";
import { SelectRadio } from "../../../../../models/types/select";
import {
    SECONDARY_BORDER_RADIUS,
    SECONDARY_COLOR,
    SECONDARY_COLOR_FOCUS,
    TEXT_COLOR,
    TEXT_COLOR_OPACITY_REAL,
} from "../../../../../style/root";

const ToggleDifficulty: React.FC<ToggleDifficultyProps> = () => {
    const [difficulty, setDifficulty] = useState<Difficulty>("easy");

    useEffect(() => {
        // console.log(difficulty);
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
                        borderRadius:
                            difficulty === option.value ? SECONDARY_BORDER_RADIUS : "none",
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

// <div className="main-container">
// <div
//   className={`switch ${this.state.animation} ${this.state.switchPosition}-position`}
// ></div>
// <input
//   defaultChecked
//   onChange={(e) => this.getSwitchAnimation(e.target.value)}
//   name="map-switch"
//   id="left"
//   type="radio"
//   value="left"
// />
// <label
//   className={`left-label ${
//     this.state.switchPosition === "left" && "black-font"
//   }`}
//   htmlFor="left"
// >
//   <h4>{labels.left.title}</h4>
// </label>

// <input
//   onChange={(e) => this.getSwitchAnimation(e.target.value)}
//   name="map-switch"
//   id="center"
//   type="radio"
//   value="center"
// />
// <label
//   className={`center-label ${
//     this.state.switchPosition === "center" && "black-font"
//   }`}
//   htmlFor="center"
// >
//   <h4>{labels.center.title}</h4>
// </label>

// <input
//   onChange={(e) => this.getSwitchAnimation(e.target.value)}
//   name="map-switch"
//   id="right"
//   type="radio"
//   value="right"
// />
// <label
//   className={`right-label ${
//     this.state.switchPosition === "right" && "black-font"
//   }`}
//   htmlFor="right"
// >
//   <h4>{labels.right.title}</h4>
// </label>
// </div>
