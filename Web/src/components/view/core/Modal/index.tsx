import React, { useEffect, useState } from "react";
import Backdrop from "./Backdrop";
import style from "./Modal.module.css";
import ModalIcon from "./ModalIcon";
import { ModalProps } from "../../../../models/types/props/view";
import Title from "../../../common/widgets/Title";
import ConfettiExplosion from "react-confetti-explosion";

const Modal: React.FC<ModalProps> = ({ children, title, gameOver }) => {
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

    return (
        <React.Fragment>
            <Backdrop showBackdrop={showContent} />
            <div className={style.centerModal}>
                <section className={`${style.modalPopup} ${showContent && style.showModalPopup}`}>
                    <ModalIcon />
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
