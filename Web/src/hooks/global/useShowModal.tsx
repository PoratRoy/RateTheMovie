import { useState } from "react";

const useShowModal = (callback?: () => void) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleToggle = () => setShowModal((prev) => !prev);
    const handleOpen = () => setShowModal(true);
    const handleClose = () => {
        setShowModal(false);
        callback && callback();
    };

    return { showModal, handleOpen, handleClose, handleToggle };
};

export default useShowModal;
