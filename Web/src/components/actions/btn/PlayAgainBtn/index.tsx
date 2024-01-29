import React from "react";
import PrimaryBtn from "../../core/button/PrimaryBtn";
import useHandleShuffle from "../../../../hooks/useHandleShuffle";

const PlayAgainBtn: React.FC = () => {
    const { handleShuffle } = useHandleShuffle();

    return <PrimaryBtn title="New Round" onClicked={handleShuffle} size="medium" />;
};

export default PlayAgainBtn;
