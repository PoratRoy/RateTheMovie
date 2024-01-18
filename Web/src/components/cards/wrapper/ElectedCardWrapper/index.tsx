import React from "react";
import { BELOW_ID } from "../../../../models/constants";
import { ElectedCardWrapperProps } from "../../../../models/types/props";

const ElectedCardWrapper: React.FC<ElectedCardWrapperProps> = ({ children, below, scope }) => {
    return (
        <div ref={scope} style={{ position: "relative" }}>
            {children}
            <div
                id={BELOW_ID}
                style={{ color: "white", position: "absolute", bottom: "-40px", opacity: 0, display: "none" }}
            >
                {below}
            </div>
        </div>
    );
};

export default ElectedCardWrapper;
