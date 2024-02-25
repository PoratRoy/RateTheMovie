import React from "react";
import PrimaryBtn from "../../../core/button/PrimaryBtn";
import useHandleShuffle from "../../../../../hooks/gameplay/useHandleShuffle";
//TODO: rename to NextRoundBtn
const PlayAgainBtn: React.FC = () => {
    const { handleShuffle } = useHandleShuffle();

    return <PrimaryBtn title="New Round" onClicked={handleShuffle} size="medium" />;
};

export default PlayAgainBtn;
