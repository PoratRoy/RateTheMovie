import React from "react";
import SecondaryBtn from "../../../core/button/SecondaryBtn";
import { HiOutlineLink } from "react-icons/hi";
import { CopyRoomLinkBtnProps } from "../../../../../models/types/props/btn";
import { useErrorContext } from "../../../../../context/ErrorContext";
import style from "./CopyRoomLinkBtn.module.css";
import SocialLinks from "../../link/SocialLinks";

const CopyRoomLinkBtn: React.FC<CopyRoomLinkBtnProps> = ({ roomLink }) => {
    const { handleSuccess } = useErrorContext();

    const title = (
        <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
            Copy invite link <HiOutlineLink />
        </span>
    );

    const handleCopy = () => {
        navigator.clipboard.writeText(roomLink);
        handleSuccess("Link copied");
    };

    return (
        <section className={style.copyRoomLinkBtn}>
            <SecondaryBtn onClicked={handleCopy} title={title} size="mediomWide" />
            <span className={style.shareVia}>or share link via</span>
            <SocialLinks roomLink={roomLink} />
        </section>
    );
};

export default CopyRoomLinkBtn;
