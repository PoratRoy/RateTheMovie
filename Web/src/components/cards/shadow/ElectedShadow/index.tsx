import React from "react";
import { ElectedShadowProps } from "../../../../models/types/props";
import { SHADOW_ID } from "../../../../models/constants";
import style from "./ElectedShadow.module.css";
import { IoMdClose } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";

const ElectedShadow: React.FC<ElectedShadowProps> = ({ isRightChoice }) => {
    return (
        <section
            className={style.electedShadowWrapper}
            id={SHADOW_ID}
            style={{ display: "none", opacity: 0 }}
        >
            {isRightChoice ? (
                <div className={style.electedShadowRight}>
                    <IoMdCheckmark />
                </div>
            ) : (
                <div className={style.electedShadowWrong}>
                    <IoMdClose />
                </div>
            )}
        </section>
    );
};

export default ElectedShadow;
