import React, { useEffect, useState } from "react";
import style from "./ToggleTopMovies.module.css";
import { ToggleTopMoviesProps } from "../../../../../models/types/props/action";
import { SelectRadio } from "../../../../../models/types/select";
import {
    SECONDARY_COLOR,
    SECONDARY_COLOR_FOCUS,
    TEXT_COLOR,
    TEXT_COLOR_OPACITY_REAL,
} from "../../../../../style/root";

const ToggleTopMovies: React.FC<ToggleTopMoviesProps> = () => {
    const [isTop, setIsTop] = useState<boolean>(false);

    useEffect(() => {
        // console.log(isTop);
    }, [isTop]);

    const options: SelectRadio[] = [
        { value: "true", label: "Top Movies" },
        { value: "false", label: "" },
    ];

    return (
        <div className={style.radioDifficulty}>
            {options.map((option: SelectRadio, i: number) => (
                <label
                    key={i}
                    className={style.radioDifficultyLabel}
                    htmlFor={`${option.value}${i}`}
                    style={{
                        color:
                            isTop === Boolean(option.value) ? TEXT_COLOR : TEXT_COLOR_OPACITY_REAL,
                        backgroundColor:
                            isTop === Boolean(option.value)
                                ? SECONDARY_COLOR
                                : SECONDARY_COLOR_FOCUS,
                        borderRadius: isTop === Boolean(option.value) ? 50 : "none",
                    }}
                >
                    <input
                        id={`${option.value}${i}`}
                        type="radio"
                        name="map-switch"
                        value={option.value}
                        checked={isTop === Boolean(option.value)}
                        onChange={(e) => setIsTop(Boolean(e.target.value))}
                        className={style.radioDifficultyInput}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
};

export default ToggleTopMovies;

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
