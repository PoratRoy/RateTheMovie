import React from "react";
import style from "./PreviewProfile.module.css";
import { PreviewProfileProps } from "../../../../models/types/props/profile";
import { setupInputs } from "../../../../models/initialization/form";
import NameInput from "../../../actions/widgets/input/NameInput";
import EditAvatar from "../../../profile/EditAvatar";

const PreviewProfile: React.FC<PreviewProfileProps> = (props) => {
    return (
        <section className={style.previewProfileContainer}>
            <section className={style.previewProfileForm}>
                <EditAvatar {...props} />
                <NameInput id={setupInputs.name.id} placeholder={setupInputs.name.placeholder} />
            </section>
        </section>
    );
};

export default PreviewProfile;
