import { PropsObj } from "../models/types/props";

export const DisplayBlock: React.CSSProperties = { display: "block", opacity: 1 };
export const DisplayNone: React.CSSProperties = { display: "none", opacity: 0 };
export const DisplayFlex: React.CSSProperties = {
    opacity: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

export const styleBtnSize = (style: CSSModuleClasses): PropsObj<string> => {
    return {
        large: style.btnLarge,
        medium: style.btnMedium,
        mediomWide: style.btnMediumWide,
        small: style.btnSmall,
    };
};

export const styleSize = (style: CSSModuleClasses): PropsObj<string> => {
    return {
        wrap: style.sizeWrap,
        large: style.sizeLarge,
        medium: style.sizeMedium,
        small: style.sizeSmall,
        Xsmall: style.sizeXSmall,
    };
};

export const styleDisplay = (style: CSSModuleClasses): PropsObj<string> => {
    return {
        wrap: style.sizeWrap,
        large: style.sizeLarge,
        small: style.sizeSmall,
        Xsmall: style.sizeXSmall,
    };
};

export const stylePosition = (style: CSSModuleClasses): PropsObj<string> => {
    return {
        absolute: style.positionAbsolute,
        relative: style.positionRelative,
    };
};

export const styleTopThree = (style: CSSModuleClasses): PropsObj<string> => {
    return {
        true: style.placeTopThree,
        false: style.placeNormal,
    };
};
