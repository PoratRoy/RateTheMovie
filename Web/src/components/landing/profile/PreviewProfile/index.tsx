import React, { useState } from "react";
import style from "./PreviewProfile.module.css";
import { PreviewProfileProps } from "../../../../models/types/props";
import Avater from "../../../profile/Avater";
import EditProfileBtn from "../../../actions/btn/EditProfileBtn";
import { AvaterImgs } from "../../../../models/avaters";
import { DefualtPlayerName } from "../../../../models/constants";

const PreviewProfile: React.FC<PreviewProfileProps> = ({ children, profileName, avaterId }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const img = avaterId === -1 ? undefined : AvaterImgs[avaterId];

    const handleOnClick = () => {
        setIsEdit(true);
    };

    return (
        <section>
            {isEdit ? (
                <section className={style.previewProfileContainer}>{children}</section>
            ) : (
                <section className={style.previewProfileContainer}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Avater img={img} isFocus/>
                        <div className={style.previewProfileName}>
                            {profileName || DefualtPlayerName}
                        </div>
                    </div>
                    <EditProfileBtn onClicked={handleOnClick} />
                </section>
            )}
        </section>
    );
};

export default PreviewProfile;