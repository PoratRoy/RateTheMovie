import React, { useState } from "react";
import style from "./PreviewProfile.module.css";
import Avater from "../../../profile/Avater";
import EditProfileBtn from "../../../actions/widgets/btn/EditProfileBtn";
import { AvaterImgs } from "../../../../models/resources/avaters";
import { DefualtPlayerName } from "../../../../models/constant";
import { PreviewProfileProps } from "../../../../models/types/props/profile";

const PreviewProfile: React.FC<PreviewProfileProps> = ({ children, profileName, avaterId }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const img = avaterId === undefined || avaterId === -1 ? undefined : AvaterImgs[avaterId];

    const handleOnClick = () => {
        setIsEdit((prev) => !prev);
    };

    return (
        <section className={style.previewProfileContainer}>
            {isEdit ? (
                <section className={style.previewProfileForm}>{children}</section>
            ) : (
                <section className={style.previewProfileForm}>
                    <Avater img={img} isFocus />
                    <div className={style.previewProfileName}>
                        {profileName || DefualtPlayerName}
                    </div>
                </section>
            )}
            <EditProfileBtn onClicked={handleOnClick} />
        </section>
    );
};

export default PreviewProfile;
