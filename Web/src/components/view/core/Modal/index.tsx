import React, { useEffect, useState } from "react";
import Backdrop from "./Backdrop";
import style from "./Modal.module.css";
import ModalIcon from "./ModalIcon";
import { FaArrowRight } from "react-icons/fa6";
import { ModalProps } from "../../../../models/types/props/view";

const Modal: React.FC<ModalProps> = ({ children, close, title, hasCloseBtn = false }) => {
    const [showContent, setShowContent] = useState<boolean>(false);

    useEffect(() => {
        setShowContent(true);
    }, []);

    const handleClose = () => {
        setShowContent(false);
        setTimeout(() => {
            close();
        }, 500);
    };

    return (
        <React.Fragment>
            <Backdrop showBackdrop={showContent} close={hasCloseBtn ? close : () => {}} />
            <section className={`${style.modalPopup} ${showContent && style.showModalPopup}`}>
                <ModalIcon />
                {hasCloseBtn ? (
                    <div onClick={handleClose} className={style.modalClose}>
                        <FaArrowRight />
                    </div>
                ) : null}
                <div className={style.modalTitle}>{title}</div>
                {children}
            </section>
        </React.Fragment>
    );
};

export default Modal;
