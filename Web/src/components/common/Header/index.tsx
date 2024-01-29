import React from "react";
import style from "./Header.module.css";
import Score from "../../actions/Score";
import Logo from "../Logo";
import ShuffleBtn from "../../actions/btn/ShuffleBtn";
import { useGamePlayContext } from "../../../context/GamePlayContext";

const Header: React.FC = () => {
    const { players } = useGamePlayContext();

    return (
        <section className={style.gameHeaderContainer}>
            <Score score={players[0].score} />
            <Logo size="small" />
            <ShuffleBtn />
        </section>
    );
};

export default Header;
