import React from "react";
import PrimaryIconBtn from "../../../core/button/PrimaryIconBtn";
import { ShuffleBtnProps } from "../../../../../models/types/props/btn";
import useGameActions from "../../../../../hooks/gameplay/useGameActions";
import { useGamePlayContext } from "../../../../../context/GamePlayContext";
import { SHUFFLE_ATTEMPT } from "../../../../../models/constant";
import OutOf from "../../../../common/OutOf";
// import { GiCardExchange } from "react-icons/gi";

const ShuffleBtn: React.FC<ShuffleBtnProps> = ({ close }) => {
    const { handleShuffle } = useGameActions(close);
    const { game } = useGamePlayContext();
    const isDisabled = game?.shuffleAttempt === 0;

    const title = (
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            Shuffle
            <OutOf
                current={game?.shuffleAttempt || SHUFFLE_ATTEMPT}
                total={SHUFFLE_ATTEMPT}
                isDisabled={isDisabled}
            />
        </span>
    );

    return (
        <PrimaryIconBtn
            title={title}
            onClicked={handleShuffle}
            disabled={isDisabled}
            size="medium"
        />
    );
};

export default ShuffleBtn;
