import React, { useState } from "react";
import style from "./Header.module.css";
import Logo from "../Logo";
import PlayerProfile from "../../profile/PlayerProfile";
import RoundTitle from "../RoundTitle";
import PauseBtn from "../../actions/btn/PauseBtn";
import PauseModal from "../../view/modals/PauseModal";

const Header: React.FC = () => {
    const [showPauseModal, setShowPauseModal] = useState<boolean>(false);

    const handlePause = () => {
        setShowPauseModal(true);
    };

    return (
        <section className={style.gameHeaderContainer}>
            <PlayerProfile />
            <div className={style.gameHeaderCenter}>
                <Logo size="small" />
                <RoundTitle />
            </div>
            <PauseBtn onClicked={handlePause} />
            {showPauseModal ? <PauseModal close={() => setShowPauseModal(false)} /> : null}
        </section>
    );
};

export default Header;
