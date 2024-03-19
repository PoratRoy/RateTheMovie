import React, { useEffect } from "react";
import MultiRoundEndModal from "../../../components/view/modals/MultiRoundEndModal";
import RoundEndModal from "../../../components/view/modals/RoundEndModal";
import useMod from "../../../hooks/gameplay/useMod";
import useShowModal from "../../../hooks/global/useShowModal";
import { useGameStatusContext } from "../../../context/GameStatusContext";
import { useAnimationContext } from "../../../context/AnimationContext";
import { CardFace } from "../../../models/enums/animation";

const GameModal: React.FC = () => {
    const { isMulti } = useMod();
    const { setIsRoundFinished, gameStatus } = useGameStatusContext();
    const { setIsFlipCard } = useAnimationContext();
    const { showModal, handleOpen, handleClose } = useShowModal(() => setIsRoundFinished(false));

    useEffect(() => {
        if (gameStatus.isRoundFinished) {
            handleOpen();
            setIsFlipCard(CardFace.BACK);
        }
    }, [gameStatus.isRoundFinished]);

    return showModal ? (
        isMulti() ? (
            <MultiRoundEndModal close={handleClose} />
        ) : (
            <RoundEndModal close={handleClose} />
        )
    ) : null;
};

export default GameModal;
