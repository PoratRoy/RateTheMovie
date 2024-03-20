import React, { useEffect } from "react";
import MultiRoundEndModal from "../../../components/view/modals/MultiRoundEndModal";
import RoundEndModal from "../../../components/view/modals/RoundEndModal";
import useMod from "../../../hooks/gameplay/useMod";
import useShowModal from "../../../hooks/global/useShowModal";
import { useGameStatusContext } from "../../../context/GameStatusContext";
import { useAnimationContext } from "../../../context/AnimationContext";
import { CardFace } from "../../../models/enums/animation";
import useRoundEndModal from "../../../hooks/gameplay/useRoundEndModal";
import Session from "../../../utils/storage/sessionStorage";
import { SessionKey } from "../../../models/enums/session";

const GameModal: React.FC = () => {
    const { isMulti } = useMod();
    const { setIsRoundFinished, gameStatus } = useGameStatusContext();
    const { showModal, handleOpen, handleClose } = useShowModal(() => setIsRoundFinished(false));
    const { setIsFlipCard } = useAnimationContext();
    const { title, gameOver } = useRoundEndModal();
    const args = { close: handleClose, title, gameOver };

    useEffect(() => {
        if (gameStatus.isRoundFinished) {
            handleOpen();
            setIsFlipCard(CardFace.BACK);
            Session.set(SessionKey.GAME_OVER, gameOver);
        }
    }, [gameStatus.isRoundFinished]);


    return showModal ? (
        isMulti() ? (
            <MultiRoundEndModal {...args} />
        ) : (
            <RoundEndModal {...args} />
        )
    ) : null;
};

export default GameModal;
