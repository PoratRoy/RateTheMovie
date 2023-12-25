import { StylesConfig } from "react-select";
import { SelectOption } from "../models/types/common";

const selectStyles: StylesConfig<SelectOption, true> = {
    control: (styles) => ({
        ...styles,
        backgroundColor: "SECONDARY_BACKGROUND_COLOR",
        width: "100%",
        minHeight: "PRIMARY_INPUT_HEIGHT",
        height: "100%",
        border: `1px solid ${"PRIMARY_BORDER_COLOR"}`,
        borderRadius: "PRIMARY_BORDER_RADIUS",
        padding: "INPUT_PADDING",
        fontSize: "1rem",
        boxShadow: "none",
        "&:hover": {
            cursor: "pointer",
            border: `1px solid ${"TEXT_COLOR_HOVER"}`,
        },
    }),
    option: (provided, state) => ({
        ...provided,
        width: "100%",
        height: "100%",
        color: "TEXT_COLOR",
        backgroundColor: state.isFocused ? "BUTTON_COLOR_HOVER" : "BUTTON_COLOR",
        cursor: state.isFocused ? "pointer" : "default",
        padding: "0.5em 3em 0.5em 2em",
        "&:active": {
            cursor: "pointer",
            backgroundColor: "BUTTON_COLOR_HOVER",
        },
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: "TEXT_COLOR",
        opacity: state.isDisabled ? 0.5 : 1,
        transition: "opacity 300ms",
    }),
    input: (styles) => ({ ...styles, color: "TEXT_COLOR" }),
    placeholder: (styles) => ({ ...styles, color: "LIGHT_TEXT_COLOR", textAlign: "start" }),
    indicatorSeparator: () => ({ display: "none" }),
    menuList: (styles) => ({
        ...styles,
        maxHeight: 200,
        overflow: "scroll",
    }),
    menu: (styles) => ({
        ...styles,
        backgroundColor: "BUTTON_COLOR",
        padding: "0.4em 0",
        border: `1px solid ${"TITLE_COLOR_HOVER"}`,
        boxShadow: "0px 11px 22px rgba(0, 0, 0, 0.14)",
        borderRadius: "0 0 10px 10px",
        margin: "-6px 0 0 0",
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: "LIGHT_TEXT_COLOR",
        "&:hover": {
            cursor: "pointer",
            color: "LIGHT_TEXT_COLOR_HOVER",
        },
    }),
    multiValue: (styles) => {
        return {
            ...styles,
            backgroundColor: "TERTIARY_BACKGROUND_COLOR",
            borderRadius: 20,
            border: `1px solid ${"SECONDARY_BORDER_COLOR"}`,
            display: "flex",
            alignItems: "center",
            padding: "0 5px",
        };
    },
    multiValueLabel: (styles) => ({
        ...styles,
        color: "TEXT_COLOR",
    }),
    multiValueRemove: (styles) => ({
        ...styles,
        color: "LIGHT_TEXT_COLOR",
        cursor: "pointer",
        ":hover": {
            color: "LIGHT_TEXT_COLOR_HOVER",
        },
    }),
};

export default selectStyles;
