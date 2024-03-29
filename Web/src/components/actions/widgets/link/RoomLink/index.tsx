import React from "react";
import style from "./RoomLink.module.css";
import { FaRegCopy } from "react-icons/fa6";
import { useErrorContext } from "../../../../../context/ErrorContext";
import { RoomLinkProps } from "../../../../../models/types/props/link";
import Collapse from "../../Collapse";
import useToggle from "../../../../../hooks/global/useToggle";
import ToggleArrow from "../../toggle/ToggleArrow";
//TODO: not in use
const RoomLink: React.FC<RoomLinkProps> = ({ roomLink, isDefaultOpen = false }) => {
    const [isOpen, toggle] = useToggle(isDefaultOpen);
    const { handleSuccess } = useErrorContext();
    const handleCopy = () => {
        navigator.clipboard.writeText(roomLink);
        handleSuccess("Link copied");
    };

    return (
        <section className={style.roomLink}>
            <div className={style.roomLinkTitle}>
                <label>Share link with your friends</label>
                <ToggleArrow
                    isOpen={isOpen}
                    handleOnClick={toggle}
                    startDirection="right"
                    endDirection="down"
                    size="small"
                />
            </div>
            <Collapse isOpen={isOpen}>
                <section className={style.roomLinkContainer}>
                    <span className={style.roomLinkInput}>
                        <span className={style.roomLinkText}>{roomLink}</span>
                    </span>
                    <span onClick={handleCopy} className={style.roomCopyBtn}>
                        <FaRegCopy />
                    </span>
                </section>
            </Collapse>
        </section>
    );

    //TODO: add button to share to social media
    //https://www.npmjs.com/package/react-share
};

export default RoomLink;
