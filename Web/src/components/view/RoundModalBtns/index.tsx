import React from "react";
import style from "./RoundModalBtns.module.css";
import { DisplayFlex, DisplayNone } from "../../../style/style";
import { RoundModalBtnsProps } from "../../../models/types/props/view";
import PlayAgainBtn from "../../actions/widgets/btn/PlayAgainBtn";
import NextRoundBtn from "../../actions/widgets/btn/NextRoundBtn";
import AdditionalBtns from "../core/AdditionalBtns";

const RoundModalBtns: React.FC<RoundModalBtnsProps> = ({ id, close, gameOver, isSingle }) => {
    return (
        <section
            className={style.roundModalBtns}
            id={id}
            style={id ? DisplayNone : DisplayFlex}
        >
            {gameOver ? <PlayAgainBtn close={close} /> : <NextRoundBtn close={close} />}
            <AdditionalBtns close={close} gameOver={gameOver} isSingle={isSingle} />
        </section>
    );
};

export default RoundModalBtns;
