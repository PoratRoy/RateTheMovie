import React, { useRef } from "react";
import style from "./CardViewLayout.module.css";
import CloseBtn from "../../view/core/CloseBtn";
import useClickOutside from "../../../hooks/global/useClickOutside";
import { CardViewLayoutProps } from "../../../models/types/props/layout";

const CardViewLayout: React.FC<CardViewLayoutProps> = ({ children, close }) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(modalRef, () => {
        close();
    });

    return (
        <section ref={modalRef} className={style.cardViewModal}>
            <section className={style.cardViewChildren}>
                <CloseBtn close={close} />
                {children}
            </section>
        </section>
    );
};

export default CardViewLayout;
