import React from "react";
import CardLayout from "../../../layout/CardLayout";
import style from "./BackCard.module.css";
import LoadingCard from "../../core/LoadingCard";

const BackCard: React.FC = () => {
    return (
        <CardLayout size={"large"}>
            <div className={style.cardInnerContainer}>
                <div className={style.cardFront}>
                    <LoadingCard />
                </div>
            </div>
        </CardLayout>
    );
};

export default BackCard;
