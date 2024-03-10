import React, { useEffect, useState } from "react";
import style from "./PreviewProfile.module.css";
import EditProfileBtn from "../../../actions/widgets/btn/EditProfileBtn";
import { AvatarImgs } from "../../../../models/resources/avatars";
import { DefualtPlayerName } from "../../../../models/constant";
import { PreviewProfileProps } from "../../../../models/types/props/profile";
import AvatarSwiper from "../../../actions/AvatarSwiper";
import { setupInputs } from "../../../../models/initialization/form";
import NameInput from "../../../actions/widgets/input/NameInput";
import Avatar from "../../../profile/Avatar";

const PreviewProfile: React.FC<PreviewProfileProps> = ({ setValue, player, avatarId, watch }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const [avatar, setAvatar] = useState<string | undefined>(
        avatarId === undefined || avatarId === -1 ? undefined : AvatarImgs[avatarId],
    );
    const [name, setName] = useState<string | undefined>(player?.name || DefualtPlayerName);

    useEffect(() => {
        const subscriptionAvater = watch((value) =>
            setAvatar(AvatarImgs[parseInt(value.avatar || "0")]),
        );
        const subscriptionName = watch((value) => setName(value.name));
        return () => {
            subscriptionAvater.unsubscribe();
            subscriptionName.unsubscribe();
        };
    }, [watch]);

    const handleOnClick = () => {
        setIsEdit((prev) => !prev);
    };

    return (
        <section className={style.previewProfileContainer}>
            {isEdit ? (
                <section className={style.previewProfileForm}>
                    <AvatarSwiper
                        setValue={setValue}
                        id={setupInputs.avatar.id}
                        defualt={player?.avatar || 0}
                    />
                    <NameInput
                        id={setupInputs.name.id}
                        placeholder={setupInputs.name.placeholder}
                    />
                </section>
            ) : (
                <section className={style.previewProfileForm}>
                    <Avatar img={avatar} size="large"  />
                    <div className={style.previewProfileName}>{name}</div>
                </section>
            )}
            <EditProfileBtn onClicked={handleOnClick} toggle={isEdit} />
        </section>
    );
};

export default PreviewProfile;
