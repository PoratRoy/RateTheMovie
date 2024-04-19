import React from "react";
import style from "./RoundPlayerPlace.module.css";
import { PACK_CARDS_NUM } from "../../../../models/constant";
import { X_SMALL_CARD_WIDTH } from "../../../../style/root";

const NoCardsSelected: React.FC = () => {
    return (
        <div
            className={style.rankingNoCards}
            style={{
                width: `calc(${(PACK_CARDS_NUM - 1) * 5}px + ${
                    PACK_CARDS_NUM * X_SMALL_CARD_WIDTH
                }px)`,
            }}
        >
            No cards selected
        </div>
    );
};

export default NoCardsSelected;
