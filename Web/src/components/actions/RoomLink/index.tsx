import React from "react";
import style from "./RoomLink.module.css";
import { RoomLinkProps } from "../../../models/types/props";
import InputLayout from "../../layout/InputLayout";
import { FaRegCopy } from "react-icons/fa6";

const RoomLink: React.FC<RoomLinkProps> = ({ roomLink }) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(roomLink);
    }

    return (
        <InputLayout label={"Room link"} id={""}>
            <section className={style.roomLinkInputContianer}>
                <span className={style.roomLinkText}>{roomLink}</span>
                <span onClick={handleCopy} className={style.roomCopyBtn}>
                    <FaRegCopy />
                </span>
            </section>
        </InputLayout>
    );

    //TODO: copy tag when clicked
    //TODO: add button to share to social media
};

export default RoomLink;
