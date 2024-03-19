import React from "react";
import style from "./ElectedShadow.module.css";
import { IoMdClose } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { ElectedShadowProps } from "../../../../models/types/props/card";
import { DisplayFlex, DisplayNone } from "../../../../style/style";

const ElectedShadow: React.FC<ElectedShadowProps> = ({ id, isRightChoice }) => {
    const setShadow = () => {
        if (isRightChoice) {
            return (
                <section
                    className={style.electedShadowWrapperRight}
                    id={id}
                    style={id ? DisplayNone : DisplayFlex}
                >
                    <div className={style.electedShadowRight}>
                        <IoMdCheckmark />
                    </div>
                </section>
            );
        } else {
            return (
                <section
                    className={style.electedShadowWrapperWrong}
                    id={id}
                    style={id ? DisplayNone : DisplayFlex}
                >
                    <div className={style.electedShadowWrong}>
                        <IoMdClose />
                    </div>
                </section>
            );
        }
    };

    return setShadow();
};

export default ElectedShadow;
