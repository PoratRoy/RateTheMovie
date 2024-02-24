import style from "./LandingLayout.module.css";
import Logo from "../../common/Logo";
import Footer from "../../common/Footer";
import { LandingLayoutProps } from "../../../models/types/props";
import useLandingAnimation from "../../../hooks/animation/useLandingAnimation";
import { LOGO_ID } from "../../../models/constants";
import WaveLayout from "../WaveLayout";
import BackgroundPoster from "../../common/BackgroundPoster";

const LandingLayout: React.FC<LandingLayoutProps> = ({ children, setupOption }) => {
    const { scope } = useLandingAnimation(setupOption);

    return (
        <section ref={scope} className={style.landingBackground}>
            <BackgroundPoster />
            <WaveLayout>
                <section className={style.landingBtnContainer}>
                    <Logo id={LOGO_ID} />
                    {children}
                </section>
                <Footer />
            </WaveLayout>
        </section>
    );
};

export default LandingLayout;
