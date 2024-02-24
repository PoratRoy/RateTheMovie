import React, { useState } from "react";
import style from "./PreviewProfile.module.css";
import { PreviewProfileProps } from "../../../../models/types/props";
import ProfileAvater from "../common/ProfileAvater";
import EditProfileBtn from "../../../actions/btn/EditProfileBtn";
import { AvaterImgs } from "../../../../models/avaters";
import { DefualtPlayerName } from "../../../../models/constants";

const PreviewProfile: React.FC<PreviewProfileProps> = ({ children, profileName, avaterId }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);

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
                        <ProfileAvater img={AvaterImgs[avaterId]} />
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
