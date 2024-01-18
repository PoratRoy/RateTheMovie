import React from "react";
import PackOfSelectedCards from "../../cards/pack/PackOfSelectedCards";
import FinishBtn from "../../actions/btn/FinishBtn";
import style from "./ElectedPackLayout.module.css";

const ElectedPackLayout: React.FC = () => {
    return (
        <section className={style.electedPackContainer}>
            <div className={style.electedPack}>
                <PackOfSelectedCards />
            </div>
            <div className={style.electedPackBtns}>
                <FinishBtn />
            </div>
        </section>
    );
};

export default ElectedPackLayout;
