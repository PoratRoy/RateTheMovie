import React from "react";
import { ABOVE_ID, BELOW_ID } from "../../../../models/constants";
import { ElectedCardWrapperProps } from "../../../../models/types/props";

const ElectedCardWrapper: React.FC<ElectedCardWrapperProps> = ({ children, above, below, scope }) => {
    return (
        <div ref={scope} style={{ position: "relative" }}>
            <div
                id={ABOVE_ID}
                style={{ position: "relative", top: 100, opacity: 0, display: "none", scale: 1 }}
            >
                {above}
            </div>
            {children}
            <div
                id={BELOW_ID}
                style={{ position: "relative", bottom: 100, opacity: 0, display: "none" }}
            >
                {below}
            </div>
        </div>
    );
};

export default ElectedCardWrapper;
