import React, { useEffect, useState } from "react";
import Backdrop from "./Backdrop";
import style from "./Modal.module.css";
import ModalIcon from "./ModalIcon";
import { ModalProps } from "../../../../models/types/props/view";
import Title from "../../../common/widgets/Title";
import ReturnBtn from "../../../actions/widgets/btn/ReturnBtn";
import ConfettiExplosion from "react-confetti-explosion";

const Modal: React.FC<ModalProps> = ({
    children,
    close,
    title,
    gameOver,
    closeBtnType = "return",
    hasCloseBtn = false,
}) => {
    const [showContent, setShowContent] = useState<boolean>(false);
    const [isExploding, setIsExploding] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);

    useEffect(() => {
        if (gameOver) {
            setIsExploding(true);
        }
    }, [gameOver]);

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
            {isExploding && (
                <ConfettiExplosion
                    force={0.1}
                    duration={2500}
                    particleCount={80}
                    width={600}
                    height={"120vh"}
                    zIndex={100}
                    onComplete={() => setIsExploding(false)}
                />
            )}
        </React.Fragment>
    );
};

export default Modal;
