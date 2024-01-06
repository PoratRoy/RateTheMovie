import React from "react";
import { PlayBtnProps } from "../../../../models/types/props";
import PrimaryBtn from "../../core/button/PrimaryBtn";

const PlayBtn: React.FC<PlayBtnProps> = ({ title, loading }) => {
    return <PrimaryBtn title={title} loading={loading} type="submit" size="Large" />;
};

export default PlayBtn;
