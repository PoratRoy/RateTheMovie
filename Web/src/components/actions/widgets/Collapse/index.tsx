import React from "react";
import { CollapseProps } from "../../../../models/types/props/action";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { tweenAnimation } from "../../../../style/animation";

const Collapse: React.FC<CollapseProps> = ({ children, isOpen }) => {
    return (
        <LazyMotion features={domAnimation} strict>
            <div aria-expanded={isOpen} data-timeout="auto" style={{ width: "100%"}}>
                <m.div
                    style={{ overflow: "hidden", width: "100%"}}
                    initial={{ height: 0, opacity: 1 }}
                    animate={tweenAnimation(isOpen)}
                    exit={{ height: 0, opacity: 1 }}
                >
                    {children}
                </m.div>
            </div>
        </LazyMotion>
    );
};

export default Collapse;
