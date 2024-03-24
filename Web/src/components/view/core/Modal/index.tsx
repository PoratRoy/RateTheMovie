import React, { useEffect, useState } from "react";
import Backdrop from "./Backdrop";
import style from "./Modal.module.css";
import ModalIcon from "./ModalIcon";
import { ModalProps } from "../../../../models/types/props/view";
import Title from "../../../common/widgets/Title";
import ReturnBtn from "../../../actions/widgets/btn/ReturnBtn";

const Modal: React.FC<ModalProps> = ({
    children,
    close,
    title,
    closeBtnType = "return",
    hasCloseBtn = false,
}) => {
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
            <div className={style.centerModal}>
                <section className={`${style.modalPopup} ${showContent && style.showModalPopup}`}>
                    <ModalIcon />
                    {hasCloseBtn ? (
                        <ReturnBtn type={closeBtnType} handleClose={handleClose} close={close} />
                    ) : null}
                    <Title title={title} />
                    {children}
                </section>
            </div>
        </React.Fragment>
    );
};

export default Modal;
