import React from "react";
import SecondaryBtn from "../../../core/button/SecondaryBtn";
import { RevealOrderBtnProps } from "../../../../../models/types/props/btn";
import { SiRevealdotjs } from "react-icons/si";

const RevealOrderBtn: React.FC<RevealOrderBtnProps> = ({ onClicked }) => {
    const title = (
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <SiRevealdotjs style={{fontSize: "1.5rem"}}/> Reveal Order
        </span>
    );

    return <SecondaryBtn onClicked={onClicked} title={title} size="mediom-wide" />;
};

export default RevealOrderBtn;
