import React from "react";
import { PlayBtnProps } from "../../../../models/types/props";
import PrimaryBtn from "../../core/button/PrimaryBtn";

const PlayBtn: React.FC<PlayBtnProps> = ({
    id,
    title,
    onClicked,
    loading = false,
    type = "button",
}) => {
    return (
        <PrimaryBtn
            id={id}
            title={title}
            onClicked={onClicked}
            loading={loading}
            type={type}
            size="large"
        />
    );
};

export default PlayBtn;
