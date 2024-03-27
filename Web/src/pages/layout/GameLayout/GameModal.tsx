import React, { useEffect } from "react";
import MultiRoundEndModal from "../../../components/view/modals/MultiRoundEndModal";
import RoundEndModal from "../../../components/view/modals/RoundEndModal";
import useMod from "../../../hooks/gameplay/useMod";
import useShowModal from "../../../hooks/global/useShowModal";
import { useAnimationContext } from "../../../context/AnimationContext";
import { CardFace } from "../../../models/enums/animation";
import useRoundEndModal from "../../../hooks/gameplay/useRoundEndModal";
import { useGamePlayContext } from "../../../context/GamePlayContext";

const GameModal: React.FC = () => {
    const { isMulti } = useMod();
    const { game, setIsRoundFinished, setIsGameOver } = useGamePlayContext();
    const { showModal, handleOpen, handleClose } = useShowModal(() => setIsRoundFinished(false));
    const { setIsFlipCard } = useAnimationContext();
    const { title, gameOver } = useRoundEndModal();
    const args = { close: handleClose, title, gameOver };

    useEffect(() => {
        if (game?.isRoundFinished) {
            handleOpen();
            setIsFlipCard(CardFace.BACK);
            setIsGameOver(gameOver);
        }
    }, [game?.isRoundFinished]);

    return showModal ? (
        isMulti() ? (
            <MultiRoundEndModal {...args} />
        ) : (
            <RoundEndModal {...args} />
        )
    ) : null;
};

export default GameModal;
