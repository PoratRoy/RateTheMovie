import React from "react";
import PackOfSelectedCards from "../../cards/pack/PackOfSelectedCards";
import FinishBtn from "../../actions/btn/FinishBtn";
import style from "./ElectedPackLayout.module.css";
import RefreshBtn from "../../actions/btn/RefreshBtn";

const ElectedPackLayout: React.FC = () => {
    return (
        <section className={style.electedPackContainer}>
            <div className={style.electedPack}>
                <PackOfSelectedCards />
            </div>
            <div className={style.electedPackBtns}>
                <FinishBtn />
                <RefreshBtn />
            </div>
        </section>
    );
};

export default ElectedPackLayout;
