import React from "react";
import { GiCardExchange } from "react-icons/gi";
import useHandleShuffle from "../../../../../hooks/gameplay/useHandleShuffle";
import PrimaryIconBtn from "../../../core/button/PrimaryIconBtn";
import { ShuffleBtnProps } from "../../../../../models/types/props/btn";

const ShuffleBtn: React.FC<ShuffleBtnProps> = ({ close }) => {
    const { handleShuffle } = useHandleShuffle();

    const handleShuffleBtn = () => {
        handleShuffle();
        close();
    };

    const title = (
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <GiCardExchange /> Shuffle
        </span>
    );

    return <PrimaryIconBtn title={title} onClicked={handleShuffleBtn} size="medium" />;
};

export default ShuffleBtn;
