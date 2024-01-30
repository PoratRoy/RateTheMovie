import { StylesConfig } from "react-select";
import { SelectOption } from "../models/types/select";
import {
    INPUT_BACKGROUND_COLOR,
    INPUT_BACKGROUND_COLOR_HOVER,
    INPUT_LIGHT_TEXT_COLOR,
    INPUT_TEXT_COLOR,
    SECONDARY_BORDER_RADIUS,
} from "./root";

const selectStyles: StylesConfig<SelectOption, true> = {
    control: (styles) => ({
        ...styles,
        backgroundColor: INPUT_BACKGROUND_COLOR,
        minWidth: "38vw",
        width: "100%",
        maxWidth: "100%",
        minHeight: 50,
        height: "100%",
        maxHeight: 180,
        borderRadius: SECONDARY_BORDER_RADIUS,
        fontSize: "1rem",
        boxShadow: "none",
        "&:hover": {
            cursor: "pointer",
        },
    }),
    option: (provided, state) => ({
        ...provided,
        width: "100%",
        height: "100%",
        color: INPUT_TEXT_COLOR,
        backgroundColor: state.isFocused ? INPUT_BACKGROUND_COLOR_HOVER : INPUT_BACKGROUND_COLOR,
        cursor: state.isFocused ? "pointer" : "default",
        padding: "0.5em 3em 0.5em 2em",
        "&:active": {
            cursor: "pointer",
            backgroundColor: INPUT_BACKGROUND_COLOR_HOVER,
        },
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: INPUT_TEXT_COLOR,
        opacity: state.isDisabled ? 0.5 : 1,
        transition: "opacity 300ms",
    }),
    input: (styles) => ({ ...styles, color: INPUT_TEXT_COLOR }),
    placeholder: (styles) => ({ ...styles, color: INPUT_LIGHT_TEXT_COLOR, textAlign: "start" }),
    indicatorSeparator: () => ({ display: "none" }),
    menuList: (styles) => ({
        ...styles,
        maxHeight: 200,
        overflow: "scroll",
    }),
    menu: (styles) => ({
        ...styles,
        backgroundColor: INPUT_BACKGROUND_COLOR,
        padding: "0.4em 0",
        boxShadow: "none",
        borderRadius: "0 0 10px 10px",
        margin: "-7px 0 0 0",
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: INPUT_TEXT_COLOR,
        "&:hover": {
            cursor: "pointer",
            color: INPUT_LIGHT_TEXT_COLOR,
        },
    }),
    multiValue: (styles) => {
        return {
            ...styles,
            backgroundColor: "transparent",
            borderRadius: 20,
            border: `1px solid ${INPUT_LIGHT_TEXT_COLOR}`,
            display: "flex",
            alignItems: "center",
            padding: "0 5px",
        };
    },
    multiValueLabel: (styles) => ({
        ...styles,
        color: INPUT_TEXT_COLOR,
    }),
    multiValueRemove: (styles) => ({
        ...styles,
        color: INPUT_TEXT_COLOR,
        cursor: "pointer",
        ":hover": {
            color: INPUT_LIGHT_TEXT_COLOR,
        },
    }),
};

export default selectStyles;
