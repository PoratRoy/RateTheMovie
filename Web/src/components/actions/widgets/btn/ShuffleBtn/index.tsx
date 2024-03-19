import React from "react";
import { GiCardExchange } from "react-icons/gi";
import PrimaryIconBtn from "../../../core/button/PrimaryIconBtn";
import { ShuffleBtnProps } from "../../../../../models/types/props/btn";
import useGameActions from "../../../../../hooks/gameplay/useGameActions";

const ShuffleBtn: React.FC<ShuffleBtnProps> = ({ close }) => {
    const { handleShuffle } = useGameActions(close);

    const title = (
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <GiCardExchange /> Shuffle
        </span>
    );

    return <PrimaryIconBtn title={title} onClicked={handleShuffle} size="medium" />;
};

export default ShuffleBtn;
