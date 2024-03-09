import React, { useEffect } from "react";
import MultiRoundEndModal from "../../../components/view/modals/MultiRoundEndModal";
import RoundEndModal from "../../../components/view/modals/RoundEndModal";
import useMod from "../../../hooks/gameplay/useMod";
import useShowModal from "../../../hooks/global/useShowModal";
import { useGamePlayContext } from "../../../context/GamePlayContext";

const GameModal: React.FC = () => {
    const { isMulti } = useMod();
    const { setIsRoundFinished, isRoundFinished } = useGamePlayContext();
    const { showModal, handleOpen, handleClose } = useShowModal(() => setIsRoundFinished(false));

    useEffect(() => {
        if (isRoundFinished) handleOpen();
    }, [isRoundFinished]);

    return showModal ? (
        isMulti() ? (
            <MultiRoundEndModal close={handleClose} />
        ) : (
            <RoundEndModal close={handleClose} />
        )
    ) : null;
};

export default GameModal;
