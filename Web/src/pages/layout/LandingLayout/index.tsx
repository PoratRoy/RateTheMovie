import style from "./LandingLayout.module.css";
import Logo from "../../../components/common/widgets/Logo";
import Footer from "../../../components/common/Footer";
import useLandingAnimation from "../../../hooks/animation/useLandingAnimation";
import WaveLayout from "../WaveLayout";
import BackgroundPoster from "../../../components/common/BackgroundPoster";
import { ModOption } from "../../../models/enums/landing";
import { LandingLayoutProps } from "../../../models/types/props/layout";
import { LOGO_ID } from "../../../models/constant/ids";

const LandingLayout: React.FC<LandingLayoutProps> = ({ children, setupOption, setSetupOption }) => {
    const { scope } = useLandingAnimation(setupOption);
    const { mod } = setupOption;
    const footerCallback =
        mod === ModOption.NONE ? undefined : () => setSetupOption({ mod: ModOption.NONE });

    return (
        <section ref={scope} className={style.landingBackground}>
            <BackgroundPoster />
            <WaveLayout>
                <section className={style.landingBtnContainer}>
                    <Logo id={LOGO_ID} />
                    {children}
                </section>
                <Footer callback={footerCallback} />
            </WaveLayout>
        </section>
    );
};

export default LandingLayout;
