import React, { useEffect, useState } from "react";
import style from "./EditAvatar.module.css";
import Avatar from "../Avatar";
import { EditAvatarProps } from "../../../models/types/props/profile";
import EditAvatarBtn from "../../actions/widgets/btn/EditAvatarBtn";
import AvatarSwiper from "../../actions/components/AvatarSwiper";
import { AvatarImgs } from "../../../models/resources/avatars";
import { setupInputs } from "../../../models/initialization/form";

const EditAvatar: React.FC<EditAvatarProps> = ({ setValue, player, avatarId, watch }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [avatar, setAvatar] = useState<string | undefined>(
        avatarId === undefined || avatarId === -1 ? undefined : AvatarImgs[avatarId],
    );

    useEffect(() => {
        const subscriptionAvater = watch((value) =>
            setAvatar(AvatarImgs[parseInt(value.avatar || "0")]),
        );
        return () => {
            subscriptionAvater.unsubscribe();
        };
    }, [watch]);

    const handleOnClick = () => {
        setIsEdit(true);
    };

    return isEdit ? (
        <AvatarSwiper
            setValue={setValue}
            id={setupInputs.avatar.id}
            defualt={player?.avatar || 0}
            setIsEdit={setIsEdit}
        />
    ) : (
        <div className={style.editAvatarContainer}>
            <span className={style.editAvatarBtn}>
                <EditAvatarBtn onClicked={handleOnClick} />
            </span>
            <Avatar img={avatar} size="large" />
        </div>
    );
};
export default EditAvatar;
