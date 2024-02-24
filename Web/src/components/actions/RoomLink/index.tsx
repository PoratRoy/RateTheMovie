import React from "react";
import style from "./RoomLink.module.css";
import { RoomLinkProps } from "../../../models/types/props";
import { FaRegCopy } from "react-icons/fa6";

const RoomLink: React.FC<RoomLinkProps> = ({ roomLink }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(roomLink);
    };

    return (
        <section className={style.roomLink}>
            <label className={style.roomLinkTitle}>Send the room link to your friends</label>
            <section className={style.roomLinkContainer}>
                <span className={style.roomLinkInput}>
                    <span className={style.roomLinkText}>{roomLink}</span>
                </span>
                <span onClick={handleCopy} className={style.roomCopyBtn}>
                    <FaRegCopy />
                </span>
            </section>
        </section>
    );

    //TODO: copy tag when clicked
    //TODO: add button to share to social media
};

export default RoomLink;
