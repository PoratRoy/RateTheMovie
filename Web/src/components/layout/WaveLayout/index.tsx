import React from "react";
import style from "./WaveLayout.module.css";
import { WaveLayoutProps } from "../../../models/types/props";
import WaveSVG from "../../../style/WaveSVG";
import { WAVE_ID } from "../../../models/constants";

const WaveLayout: React.FC<WaveLayoutProps> = ({ children }) => {
    return (
        <section className={style.waveLandingContainer}>
            <WaveSVG />
            <section id={WAVE_ID} className={style.landingContainer}>
                {children}
            </section>
        </section>
    );
};

export default WaveLayout;
