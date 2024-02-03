import React from "react";
import style from "./RoomLink.module.css";
import { RoomLinkProps } from "../../../models/types/props";
import InputLayout from "../../layout/InputLayout";

const RoomLink: React.FC<RoomLinkProps> = ({ room }) => {
    return (
        <InputLayout label={"Room link"} id={""}>
            <section className={style.roomLinkInputContianer}>
                <span className={style.roomLinkText}>{room}</span>
                <span className={style.roomL}>
                    <button>C</button>
                </span>
            </section>
        </InputLayout>
    );
    //TODO: add copy to clipboard functionality
    //TODO: add button to copy to clipboard
    //TODO: add button to share to social media
};

export default RoomLink;
