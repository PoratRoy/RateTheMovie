import React from "react";
import PrimaryBtn from "../../../core/button/PrimaryBtn";
import { PlayBtnProps } from "../../../../../models/types/props/btn";

const PlayBtn: React.FC<PlayBtnProps> = ({
    id,
    title,
    onClicked,
    loading = undefined,
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
