import React, { useState } from "react";
import SecondaryBtn from "../../../core/button/SecondaryBtn";
import { RevealOrderBtnProps } from "../../../../../models/types/props/btn";

const RevealOrderBtn: React.FC<RevealOrderBtnProps> = ({ onClicked }) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const title = (
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {toggle ? "Reveal Your Order" : "Reveal Correct Order"}
        </span>
    );

    const handleToggle = () => {
        onClicked();
        setToggle(prev => !prev);
    };

    return <SecondaryBtn onClicked={handleToggle} title={title} size="mediom-wide" />;
};

export default RevealOrderBtn;
