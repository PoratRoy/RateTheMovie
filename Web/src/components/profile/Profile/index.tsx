import React from "react";
import style from "./Profile.module.css";
import { ProfileProps } from "../../../models/types/props/profile";
import EditAvatar from "../EditAvatar";
import NameInput from "../../actions/widgets/input/NameInput";
import { setupInputs } from "../../../models/initialization/form";

const Profile: React.FC<ProfileProps> = (props) => {
    return (
        <section className={style.profileContainer}>
            <section className={style.profileForm}>
                <EditAvatar {...props} />
                <NameInput id={setupInputs.name.id} placeholder={setupInputs.name.placeholder} />
            </section>
        </section>
    );
};

export default Profile;
