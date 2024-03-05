import { useState } from "react";

const useShowModal = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleToggle = () => setShowModal((prev) => !prev);

    return { showModal, handleOpen, handleClose, handleToggle };
};

export default useShowModal;
