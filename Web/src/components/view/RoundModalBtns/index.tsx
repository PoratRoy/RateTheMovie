import React from "react";
import style from "./RoundModalBtns.module.css";
import { DisplayFlex, DisplayNone } from "../../../style/style";
import { RoundModalBtnsProps } from "../../../models/types/props/view";
import PlayAgainBtn from "../../actions/widgets/btn/PlayAgainBtn";
import NextRoundBtn from "../../actions/widgets/btn/NextRoundBtn";
import AdditionalBtns from "../core/AdditionalBtns";

const RoundModalBtns: React.FC<RoundModalBtnsProps> = ({ id, close, gameOver, isSingle = false, role = "host" }) => {
    return (
        <section className={style.roundModalBtns} id={id} style={id ? DisplayNone : DisplayFlex}>
            {role === "host" ? (
                gameOver ? (
                    <PlayAgainBtn close={close} />
                ) : (
                    <NextRoundBtn close={close} />
                )
            ) : (
                <div>Wait for the Host to start the next round</div>
            )}
            <AdditionalBtns close={close} gameOver={gameOver} isSingle={isSingle} />
        </section>
    );
};

export default RoundModalBtns;
