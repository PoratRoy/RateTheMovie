export const springAnimation = {
    type: "spring",
    damping: 25,
    stiffness: 120,
};

export const tweenAnimation = (isOpen: boolean) => {
    return {
        transition: { type: "tween" },
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0.5,
    };
};
