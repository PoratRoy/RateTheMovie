import React from "react";
import style from "./RoomLink.module.css";
import { FaRegCopy } from "react-icons/fa6";
import { useErrorContext } from "../../../../../context/ErrorContext";
import { RoomLinkProps } from "../../../../../models/types/props/link";

const RoomLink: React.FC<RoomLinkProps> = ({ roomLink }) => {
    const { handleSuccess } = useErrorContext();
    const handleCopy = () => {
        navigator.clipboard.writeText(roomLink);
        handleSuccess("Link copied");
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

    //TODO: add button to share to social media
    //https://www.npmjs.com/package/react-share
};

export default RoomLink;
