import React from "react";
import style from "./Header.module.css";
import Logo from "../Logo";
import PlayerProfile from "../../profile/PlayerProfile";
import RoundTitle from "../RoundTitle";
import PauseBtn from "../../actions/btn/PauseBtn";

const Header: React.FC = () => {
    return (
        <section className={style.gameHeaderContainer}>
            <PlayerProfile />
            <div className={style.gameHeaderCenter}>
                <Logo size="small" />
                <RoundTitle />
            </div>
            <PauseBtn />
        </section>
    );
};

export default Header;
