import React, { useEffect, useState } from "react";
import { PACK_CARDS_NUM } from "../../../../models/constants";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { Player } from "../../../../models/types/player";
import PrimaryBtn from "../../core/button/PrimaryBtn";

const FinishBtn: React.FC = () => {
    const { players, setFinish } = useGamePlayContext();
    const [isFinished, setIsFinished] = useState<boolean>(false);

    useEffect(() => {
        let finish = true;
        players.every((player: Player) => {
            const selectedCards = player.selectedCards;
            const isAllFilled = selectedCards.every((card) => card?.movie !== undefined);
            if (selectedCards.length !== PACK_CARDS_NUM || !isAllFilled) {
                finish = false;
                return;
            }
        });
        setIsFinished(finish);
    }, [players]);

    const handleFinish = () => {
        setFinish(true);
    };

    return (
        <PrimaryBtn
            title="Finish"
            onClicked={handleFinish}
            disabled={!isFinished}
            size="small"
        />
    );
};

export default FinishBtn;
