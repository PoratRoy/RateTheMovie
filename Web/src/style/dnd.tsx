import { CSS, Transform } from "@dnd-kit/utilities";

export const dndStyle = (transform: Transform | null): React.CSSProperties => {
    return {
        transform: CSS.Translate.toString(transform),
        touchAction: "none",
        zIndex: 1000,
        cursor: "pointer",

        border: "5px solid red",
    };
};
